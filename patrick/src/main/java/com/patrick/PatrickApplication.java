package com.patrick;

import com.patrick.Entity.Category;
import com.patrick.Repository.CategoryRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class PatrickApplication {

	@Autowired
	CategoryRepository categoryRepository ;

	public static void main(String[] args) {
		SpringApplication.run(PatrickApplication.class, args);
	}

	@PostConstruct
	public void init()
	{
		if(categoryRepository.count() == 0)
		{
			categoryRepository.save(Category.builder().name("Déguisement").description("Les meilleurs déguisement pour la Saint Patrick").build());
			categoryRepository.save(Category.builder().name("Décorations").description("Les meilleures décorations pour la Saint Patrick").build());
			categoryRepository.save(Category.builder().name("Accéssoires").description("Les meilleurs accessoires pour embellir votre déguisement").build());
			categoryRepository.save(Category.builder().name("Bières").description("Les meilleurs bières pour célébrer l'événement").build());
		}

	}
}

