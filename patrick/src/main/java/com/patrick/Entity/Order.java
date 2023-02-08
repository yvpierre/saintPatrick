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
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    private String buyerName;

    private String buyerEmail;

    private String buyerAddress;

    private float amount;

    private boolean isDelivered;

    @ManyToMany
    private List<Article> articles;
}
