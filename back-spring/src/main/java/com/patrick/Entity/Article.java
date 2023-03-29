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
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @ManyToMany
    private List<Category> categories;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, length = 1000)
    private String description;

    @Column(nullable = false)
    private float price;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private String imgUrl;

    @Column(name = "dispo_en_stock",nullable = false)
    private boolean isStockDispo;

    private String size;

    private Boolean isMajor;


}
