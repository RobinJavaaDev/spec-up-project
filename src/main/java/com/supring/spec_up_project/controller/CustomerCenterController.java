// src/main/java/com/supring/spec_up_project/controller/CustomerCenterController.java (완전 재작성)
package com.supring.spec_up_project.controller;

import com.supring.spec_up_project.domain.CustomerPost;
import com.supring.spec_up_project.service.CustomerCenterService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequestMapping("/customer-center")
@RequiredArgsConstructor
public class CustomerCenterController {

    private final CustomerCenterService service;

    /** 세션에서 사용자 정보 추출 */
    private Long getCurrentUserId(HttpSession session) {
        Object userId = session.getAttribute("userId");
        return userId != null ? Long.valueOf(userId.toString()) : null;
    }

    private String getCurrentUserRole(HttpSession session) {
        Object role = session.getAttribute("role");
        return role != null ? role.toString() : "USER";
    }

    /** 개발용 로그인 (실제 서비스에서는 제거) */
    @GetMapping("/dev-login")
    @ResponseBody
    public String devLogin(@RequestParam Long userId, 
                          @RequestParam(defaultValue = "USER") String role,
                          HttpSession session) {
        session.setAttribute("userId", userId);
        session.setAttribute("role", role);
        return "로그인 성공: userId=" + userId + ", role=" + role;
    }

    /** 고객센터 메인 페이지 */
    @GetMapping
    public String customerCenter(Model model,
                                @PageableDefault(size = 10, sort = "createdAt", 
                                direction = Sort.Direction.DESC) Pageable pageable,
                                HttpSession session) {
        
        Long userId = getCurrentUserId(session);
        String role = getCurrentUserRole(session);

        // FAQ, 공지사항, 게시글 조회
        model.addAttribute("faqs", service.getAllFaqs());
        model.addAttribute("notices", service.getNotices());
        model.addAttribute("posts", service.getPosts(pageable, userId, role));
        
        // 사용자 정보
        model.addAttribute("isLoggedIn", userId != null);
        model.addAttribute("isAdmin", "ADMIN".equals(role));
        model.addAttribute("currentUserId", userId);
        
        return "customer-center/index";
    }

    /** 게시글 상세 조회 */
    @GetMapping("/post/{id}")
    public String postDetail(@PathVariable Long id, Model model, HttpSession session) {
        Long userId = getCurrentUserId(session);
        String role = getCurrentUserRole(session);

        return service.getPostWithAuth(id, userId, role)
            .map(post -> {
                model.addAttribute("post", post);
                model.addAttribute("isAdmin", "ADMIN".equals(role));
                model.addAttribute("isOwner", post.getWriter().getUserId().equals(userId));
                return "customer-center/detail";
            })
            .orElse("customer-center/forbidden");
    }

    /** 게시글 작성 페이지 */
    @GetMapping("/write")
    public String writeForm(HttpSession session, Model model) {
        Long userId = getCurrentUserId(session);
        if (userId == null) {
            return "redirect:/customer-center/login";
        }
        
        model.addAttribute("isAdmin", "ADMIN".equals(getCurrentUserRole(session)));
        return "customer-center/write";
    }

    /** 게시글 생성 */
    @PostMapping("/post")
    public String createPost(@RequestParam String title,
                            @RequestParam String content,
                            @RequestParam(required = false) Boolean isNotice,
                            HttpSession session,
                            RedirectAttributes redirectAttributes) {
        Long userId = getCurrentUserId(session);
        if (userId == null) {
            return "redirect:/customer-center/login";
        }

        try {
            service.createPost(title, content, isNotice, userId);
            redirectAttributes.addFlashAttribute("message", "게시글이 등록되었습니다.");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("error", "게시글 등록에 실패했습니다.");
        }

        return "redirect:/customer-center";
    }

    /** 게시글 삭제 */
    @PostMapping("/post/{id}/delete")
    public String deletePost(@PathVariable Long id, 
                            HttpSession session,
                            RedirectAttributes redirectAttributes) {
        Long userId = getCurrentUserId(session);
        String role = getCurrentUserRole(session);

        try {
            service.deletePost(id, userId, role);
            redirectAttributes.addFlashAttribute("message", "게시글이 삭제되었습니다.");
        } catch (SecurityException e) {
            redirectAttributes.addFlashAttribute("error", "삭제 권한이 없습니다.");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("error", "삭제에 실패했습니다.");
        }

        return "redirect:/customer-center";
    }

    /** FAQ 관리 (관리자만) */
    @PostMapping("/faq")
    public String createFaq(@RequestParam String question,
                           @RequestParam String answer,
                           HttpSession session,
                           RedirectAttributes redirectAttributes) {
        String role = getCurrentUserRole(session);
        if (!"ADMIN".equals(role)) {
            redirectAttributes.addFlashAttribute("error", "관리자만 FAQ를 등록할 수 있습니다.");
            return "redirect:/customer-center";
        }

        service.createFaq(question, answer);
        redirectAttributes.addFlashAttribute("message", "FAQ가 등록되었습니다.");
        return "redirect:/customer-center";
    }

    /** 권한 없음 페이지 */
    @GetMapping("/forbidden")
    public String forbidden() {
        return "customer-center/forbidden";
    }

        /** 게시글 수정 페이지 */
    @GetMapping("/post/{id}/edit")
    public String editForm(@PathVariable Long id, Model model, HttpSession session) {
        Long userId = getCurrentUserId(session);
        String role = getCurrentUserRole(session);
        
        return service.getPostWithAuth(id, userId, role)
            .map(post -> {
                model.addAttribute("post", post);
                model.addAttribute("isAdmin", "ADMIN".equals(role));
                return "customer-center/edit";
            })
            .orElse("customer-center/forbidden");
    }

    /** 게시글 수정 처리 */
    @PostMapping("/post/{id}/edit")
    public String updatePost(@PathVariable Long id,
                            @RequestParam String title,
                            @RequestParam String content,
                            @RequestParam(required = false) Boolean isNotice,
                            HttpSession session,
                            RedirectAttributes redirectAttributes) {
        Long userId = getCurrentUserId(session);
        String role = getCurrentUserRole(session);
        
        try {
            service.updatePost(id, title, content, isNotice, userId, role);
            redirectAttributes.addFlashAttribute("message", "게시글이 수정되었습니다.");
            return "redirect:/customer-center/post/" + id;
        } catch (SecurityException e) {
            redirectAttributes.addFlashAttribute("error", "수정 권한이 없습니다.");
            return "redirect:/customer-center";
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("error", "수정에 실패했습니다.");
            return "redirect:/customer-center/post/" + id + "/edit";
        }
    }

    /** 게시글 검색 */
    @GetMapping("/search")
    public String searchPosts(@RequestParam String keyword,
                            @PageableDefault(size = 10, sort = "createdAt", 
                            direction = Sort.Direction.DESC) Pageable pageable,
                            Model model, HttpSession session) {
        Long userId = getCurrentUserId(session);
        String role = getCurrentUserRole(session);
        
        model.addAttribute("posts", service.searchPosts(keyword, pageable, userId, role));
        model.addAttribute("keyword", keyword);
        model.addAttribute("isLoggedIn", userId != null);
        model.addAttribute("isAdmin", "ADMIN".equals(role));
        model.addAttribute("currentUserId", userId);
        
        return "customer-center/search";
    }
    
    /** FAQ 삭제 (관리자 전용) */
    @PostMapping("/faq/{id}/delete")
    public String deleteFaq(@PathVariable Long id, HttpSession session, RedirectAttributes redirectAttributes) {
        String role = getCurrentUserRole(session);
        if (!"ADMIN".equals(role)) {
            redirectAttributes.addFlashAttribute("error", "관리자만 FAQ를 삭제할 수 있습니다.");
            return "redirect:/customer-center";
        }
        try {
            service.deleteFaq(id);
            redirectAttributes.addFlashAttribute("message", "FAQ가 삭제되었습니다.");
        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("error", "FAQ 삭제에 실패했습니다.");
        }
        return "redirect:/customer-center";
    }

}
