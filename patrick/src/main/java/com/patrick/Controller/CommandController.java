package com.patrick.Controller;


import com.patrick.Entity.Article;
import com.patrick.Entity.Command;
import com.patrick.Repository.ArticleRepository;
import com.patrick.Repository.CommandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    //==================================================================================================
    //CREATE
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
    //==================================================================================================

    //==================================================================================================
    //GET
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
    //==================================================================================================

    //==================================================================================================
    //UPDATE
    @PutMapping("/{id}")
    public boolean updateCommand(@PathVariable Long id, @RequestBody Command command) {
        Optional<Command> commandOptional = commandRepo.findById(id);
        if (commandOptional.isPresent()) {
            //Modification des champs
            Command updatedCommand = commandOptional.get();
            updatedCommand.setBuyerName(command.getBuyerName());
            updatedCommand.setBuyerEmail(command.getBuyerEmail());
            updatedCommand.setBuyerAddress(command.getBuyerAddress());
            updatedCommand.setAmount(command.getAmount());
            updatedCommand.setDelivered(command.isDelivered());
            updatedCommand.setArticles(command.getArticles());
            //sauvegarde des modifications
            commandRepo.save(updatedCommand);
            return true;
        } else {
            return false;
        }
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
    //==================================================================================================

    //==================================================================================================
    //DELETE
    @DeleteMapping("/{id}")
    public boolean deleteCommand(@PathVariable Long id) {
        Optional<Command> commandOptional = commandRepo.findById(id);
        if (commandOptional.isPresent()) {
            commandRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    //==================================================================================================
}
