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
    private List<Category> category;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private int price;
    @Column(nullable = false)
    private int quantity;
    @Column(nullable = false)
    private String imgUrl;
    @Column(nullable = false)
    private boolean stockDispo;
    @Column(name ="avis_client",  nullable = false)
    private byte notice; // notice // avis client
    private int size;

    private Boolean major;

}