package com.example.ProjectRT3.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/signup")
    public String signup(){ return "signup"; }
    @GetMapping("/manageItems")
    public String manageItems() {
        return "manage_items"; // Assume you have a manage_items.html in your static or template directory
    }

    @GetMapping("/manageCategories")
    public String manageCategories() {
        return "manage_categories"; // Assume you have a manage_categories.html in your static or template directory
    }
}