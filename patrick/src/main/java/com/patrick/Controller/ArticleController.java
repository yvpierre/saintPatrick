package com.patrick.Controller;

import com.patrick.Entity.Article;
import com.patrick.Entity.Category;
import com.patrick.Repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping(path="/Article")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepo ;

    @RequestMapping(path="/get")
    public Article get(@RequestParam long id) {
        Optional<Article> article = articleRepo.findById(id) ;
        if(article.isPresent())
            return article.get() ;
        else
            return null ;
    }

    @RequestMapping(path="/getAll")
    public Iterable<Article> getAll() {
        return articleRepo.findAll() ;
    }

    @RequestMapping(path="/getAllFromCategory")
    public Iterable<Article> getAllFromCategory(@RequestParam long idCategory) {
        Iterable<Article> articles = articleRepo.findAll() ;
        ArrayList<Article> articlesFiltered = new ArrayList<Article>() ;

        for(Article article : articles){
            for(Category category : article.getCategories()){
                if(category.getId() == idCategory)
                    articlesFiltered.add(article) ;
            }
        }

        return articlesFiltered ;
    }
}
