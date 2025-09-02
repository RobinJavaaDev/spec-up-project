// src/main/java/com/supring/spec_up_project/domain/CustomerPost.java (테이블명 수정)
package com.supring.spec_up_project.domain;


import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import com.supring.spec_up_project.domain.User;


@Entity
@Table(name = "customer_post")  // ERD와 일치하도록 수정
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class CustomerPost {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long postId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User writer;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(name = "is_notice", nullable = false)
    private Boolean isNotice = false;  // 공지사항 구분 필드 추가

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
    
    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}
