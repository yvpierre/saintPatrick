package com.patrick.Controller;


import com.patrick.Entity.Command;
import com.patrick.Repository.CommandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping(path="/Command")
public class CommandController {

    @Autowired
    CommandRepository commandRepo;

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
}
