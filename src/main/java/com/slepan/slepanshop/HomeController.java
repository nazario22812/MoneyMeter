package com.slepan.slepanshop;


import jakarta.servlet.http.HttpSession;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.Principal;
import java.util.Optional;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model, HttpSession session) {
        model.addAttribute("pageTitle", "MoneyMeter");
        return "index";
    }
    @GetMapping("/currency_convert")
    public String currency_convert(Model model, HttpSession session) {
        model.addAttribute("pageTitle", "Currency Converter");
        return "convert";
    }
    @GetMapping("/cryptocurrency")
    public String krypto(Model model, HttpSession session) {
        model.addAttribute("pageTitle", "Crypto");
        return "krypta";
    }

}
