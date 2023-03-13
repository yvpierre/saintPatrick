package com.patrick.Controller;

import com.patrick.Entity.Article;
import com.patrick.Entity.Category;
import com.patrick.Entity.Command;
import com.patrick.Repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping(path="/Article")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepo ;

    //==================================================================================================
    //CREATE
    @RequestMapping(path="/create")
    public void create(@RequestBody Article article) {
        articleRepo.save(article);
    }
    //==================================================================================================

    //==================================================================================================
    //GET
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
    //==================================================================================================

    //==================================================================================================
    //UPDATE
    @RequestMapping(path="/update")
    public boolean update(@PathVariable Long id, @RequestBody Article article) {
        Optional<Article> articleOptional = articleRepo.findById(id);
        if (articleOptional.isPresent()) {
            //Modification des champs
            Article updateArticle = articleOptional.get();
            updateArticle.setName(article.getName());
            updateArticle.setDescription(article.getDescription());
            updateArticle.setPrice(article.getPrice());
            updateArticle.setQuantity(article.getQuantity());
            updateArticle.setCategories(article.getCategories());
            updateArticle.setImgUrl(article.getImgUrl());
            updateArticle.setIsMajor(article.getIsMajor());
            updateArticle.setSize(article.getSize());
            updateArticle.setStockDispo(article.isStockDispo());
            //sauvegarde des modifications
            articleRepo.save(updateArticle);
            return true;
        } else {
            return false;
        }
    }
    //==================================================================================================

    //==================================================================================================
    //DELETE
    @RequestMapping(path="/delete")
    public void delete(@RequestParam long id) {
        articleRepo.deleteById(id);
    }
    //==================================================================================================
}
