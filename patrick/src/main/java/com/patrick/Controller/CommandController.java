package com.patrick.Controller;


import com.patrick.Entity.Article;
import com.patrick.Entity.Command;
import com.patrick.Repository.ArticleRepository;
import com.patrick.Repository.CommandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping(path="/Command")
public class CommandController {

    @Autowired
    CommandRepository commandRepo;

    @Autowired
    ArticleRepository articleRepo;

    @RequestMapping(path="/get")
    public Command get(@RequestParam long id) {
        Optional<Command> command = commandRepo.findById(id) ;
        if(command.isPresent())
            return command.get() ;
        else
            return null ;
    }

    @RequestMapping(path="/getAll")
    public Iterable<Command> getAll() {
        return commandRepo.findAll() ;
    }

    @RequestMapping(path="/getAllFromCustomer")
    public Iterable<Command> getAllFromCategory(@RequestParam String buyerEmail) {
        Iterable<Command> commands = commandRepo.findAll() ;
        ArrayList<Command> commandsFiltered = new ArrayList<Command>() ;

        for(Command command : commands){
            if(command.getBuyerEmail() == buyerEmail)
                commandsFiltered.add(command) ;
        }

        return commandsFiltered ;
    }

    @RequestMapping(path="/confirm")
    public boolean getAllFromCategory(@RequestParam long id) {
        Optional<Command> command = commandRepo.findById(id) ;
        if(command.isPresent()){
            command.get().setDelivered(true);
            return true;
        }
        else
            return false;
    }

    @PostMapping(path="/create")
    public boolean create(@RequestBody Command command) {
        if(command.getArticles().size() > 0){

            //on vérifie que les articles en question existent bien
            for(Article article : command.getArticles()){
                Optional<Article> articleFromDb = articleRepo.findById(article.getId()) ;
                if(!articleFromDb.isPresent())
                    return false;
            }
            //ensuite on leur retire 1 de quantité
            for(Article article : command.getArticles()){
                Optional<Article> articleFromDb = articleRepo.findById(article.getId()) ;
                articleFromDb.get().setQuantity(articleFromDb.get().getQuantity() - 1);
                articleRepo.save(articleFromDb.get());
            }
            commandRepo.save(command);
            return true;
        }
        else
            return false;
    }
}
