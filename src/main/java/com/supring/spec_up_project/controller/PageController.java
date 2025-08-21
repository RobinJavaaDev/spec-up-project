package com.supring.spec_up_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
	//@PostMapping()
	//@PutMapping()
	//@DeleteMapping()
	// /=>localhost:8080
	@GetMapping("/")
	public String returnHome() {
		return "index";
	}
	@GetMapping("/register")
	public String registerPage() {
		return "register/index";
	}
	
	// =>localhost:8080/loginpage
	@GetMapping("/loginPage")
	public String loginPage() {
		return "login/index";
	}
	
}