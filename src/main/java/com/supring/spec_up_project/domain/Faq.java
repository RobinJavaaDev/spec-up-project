package com.supring.spec_up_project.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "faq")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Faq {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "faq_id")
    private Long faqId;

    @Column(length = 200, nullable = false)
    private String question;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String answer;
}
