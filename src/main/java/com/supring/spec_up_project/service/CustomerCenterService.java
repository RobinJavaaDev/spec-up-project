// src/main/java/com/supring/spec_up_project/service/CustomerCenterService.java (대폭 수정)
package com.supring.spec_up_project.service;

import com.supring.spec_up_project.domain.*;
import com.supring.spec_up_project.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CustomerCenterService {

    private final FaqRepository faqRepo;
    private final CustomerPostRepository postRepo;
    private final UserRepository userRepo;

    /** FAQ 전체 조회 */
    public List<Faq> getAllFaqs() {
        return faqRepo.findAll();
    }

    /** 공지사항 조회 */
    public List<CustomerPost> getNotices() {
        return postRepo.findByIsNoticeTrueOrderByCreatedAtDesc();
    }

    /** 권한별 게시글 조회 - 핵심 보안 로직 */
    public Page<CustomerPost> getPosts(Pageable pageable, Long userId, String role) {
        if (userId == null) {
            return Page.empty(pageable);  // 비로그인 시 빈 페이지
        }
        
        User user = userRepo.findById(userId)
            .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));
        
        if ("ADMIN".equals(role)) {
            return postRepo.findAllByOrderByCreatedAtDesc(pageable);
        } else {
            return postRepo.findByWriter(user, pageable);
        }
    }

    /** 게시글 상세 조회 - 권한 검증 포함 */
    public Optional<CustomerPost> getPostWithAuth(Long postId, Long userId, String role) {
        Optional<CustomerPost> postOpt = postRepo.findById(postId);
        
        if (postOpt.isEmpty() || userId == null) {
            return Optional.empty();
        }
        
        CustomerPost post = postOpt.get();
        
        // 관리자이거나 본인 글인 경우만 조회 허용
        if ("ADMIN".equals(role) || post.getWriter().getUserId().equals(userId)) {
            return Optional.of(post);
        }
        
        return Optional.empty();
    }

    /** 게시글 생성 */
    @Transactional
    public CustomerPost createPost(String title, String content, Boolean isNotice, Long userId) {
        User writer = userRepo.findById(userId)
            .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));

        CustomerPost post = CustomerPost.builder()
            .title(title)
            .content(content)
            .isNotice(isNotice != null ? isNotice : false)
            .writer(writer)
            .build();

        return postRepo.save(post);
    }

    /** 게시글 삭제 - 권한 검증 포함 */
    @Transactional
    public void deletePost(Long postId, Long userId, String role) {
        CustomerPost post = postRepo.findById(postId)
            .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));

        // 관리자이거나 본인 글인 경우만 삭제 허용
        if (!"ADMIN".equals(role) && !post.getWriter().getUserId().equals(userId)) {
            throw new SecurityException("삭제 권한이 없습니다.");
        }

        postRepo.deleteById(postId);
    }

    /** FAQ 관리 기능 추가 */
    @Transactional
    public Faq createFaq(String question, String answer) {
        Faq faq = Faq.builder()
            .question(question)
            .answer(answer)
            .build();
        return faqRepo.save(faq);
    }

    @Transactional
    public void deleteFaq(Long faqId) {
        faqRepo.deleteById(faqId);
    }

    /** 게시글 수정 - 권한 검증 포함 */
@Transactional
public CustomerPost updatePost(Long postId, String title, String content, Boolean isNotice, Long userId, String role) {
    CustomerPost post = postRepo.findById(postId)
        .orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));

    // 관리자이거나 본인 글인 경우만 수정 허용
    if (!"ADMIN".equals(role) && !post.getWriter().getUserId().equals(userId)) {
        throw new SecurityException("수정 권한이 없습니다.");
    }

    post.setTitle(title);
    post.setContent(content);
    
    // 관리자만 공지사항 설정 가능
    if ("ADMIN".equals(role) && isNotice != null) {
        post.setIsNotice(isNotice);
    }

    return postRepo.save(post);
}

/** 게시글 검색 기능 */
public Page<CustomerPost> searchPosts(String keyword, Pageable pageable, Long userId, String role) {
    if (userId == null) {
        return Page.empty(pageable);
    }
    
    User user = userRepo.findById(userId)
        .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));
    
    if ("ADMIN".equals(role)) {
        // 관리자는 전체 게시글에서 검색
        return postRepo.findByTitleContainingOrContentContainingOrderByCreatedAtDesc(
            keyword, keyword, pageable);
    } else {
        // 일반 사용자는 본인 글에서만 검색
        return postRepo.findByWriterAndTitleContainingOrWriterAndContentContainingOrderByCreatedAtDesc(
            user, keyword, user, keyword, pageable);
    }
}

}
