package com.patrick.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Command {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @Column(nullable = false)
    private String buyerName;

    @Column(nullable = false)
    private String buyerEmail;

    @Column(nullable = false)
    private String buyerAddress;

    @Column(nullable = false)
    private float amount;

    @Column(nullable = false)
    private boolean isDelivered;

    @ManyToMany
    @Column(nullable = false)
    private List<Article> articles;
}
