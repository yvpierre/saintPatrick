package com.patrick.Controller;


import com.patrick.Entity.Article;
import com.patrick.Entity.Category;
import com.patrick.Entity.Order;
import com.patrick.Repository.ArticleRepository;
import com.patrick.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping(path="/Order")
public class OrderController {

    @Autowired
    OrderRepository orderRepo ;

    @RequestMapping(path="/get")
    public Order get(@RequestParam long id) {
        Optional<Order> order = orderRepo.findById(id) ;
        if(order.isPresent())
            return order.get() ;
        else
            return null ;
    }

    @RequestMapping(path="/getAll")
    public Iterable<Order> getAll() {
        return orderRepo.findAll() ;
    }

    @RequestMapping(path="/getAllFromCustomer")
    public Iterable<Order> getAllFromCategory(@RequestParam String buyerEmail) {
        Iterable<Order> orders = orderRepo.findAll() ;
        ArrayList<Order> ordersFiltered = new ArrayList<Order>() ;

        for(Order order : orders){
            if(order.getBuyerEmail() == buyerEmail)
                ordersFiltered.add(order) ;
        }

        return ordersFiltered ;
    }

    @RequestMapping(path="/confirm")
    public boolean getAllFromCategory(@RequestParam long id) {
        Optional<Order> order = orderRepo.findById(id) ;
        if(order.isPresent()){
            order.get().setDelivered(true);
            return true;
        }
        else
            return false;
    }
}
