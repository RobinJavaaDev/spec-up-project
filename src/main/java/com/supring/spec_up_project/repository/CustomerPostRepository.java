// src/main/java/com/supring/spec_up_project/repository/CustomerPostRepository.java
package com.supring.spec_up_project.repository;

import com.supring.spec_up_project.domain.CustomerPost;
import com.supring.spec_up_project.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CustomerPostRepository extends JpaRepository<CustomerPost, Long> {
    // 본인 작성글만 조회 (페이징)
    Page<CustomerPost> findByWriter(User writer, Pageable pageable);
    
    // 공지사항만 조회
    List<CustomerPost> findByIsNoticeTrueOrderByCreatedAtDesc();
    
    // 일반 게시글만 조회 (페이징)
    Page<CustomerPost> findByIsNoticeFalseOrderByCreatedAtDesc(Pageable pageable);
    
    // 관리자용 전체 조회 (페이징)
    Page<CustomerPost> findAllByOrderByCreatedAtDesc(Pageable pageable);

    // 검색 기능을 위한 메서드들
    Page<CustomerPost> findByTitleContainingOrContentContainingOrderByCreatedAtDesc(
    String titleKeyword, String contentKeyword, Pageable pageable);

    Page<CustomerPost> findByWriterAndTitleContainingOrWriterAndContentContainingOrderByCreatedAtDesc(
    User writer1, String titleKeyword, User writer2, String contentKeyword, Pageable pageable);

}
