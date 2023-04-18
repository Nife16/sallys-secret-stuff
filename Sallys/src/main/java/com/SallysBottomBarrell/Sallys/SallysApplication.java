package com.SallysBottomBarrell.Sallys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

// Lets your project know its a spring boot application
@SpringBootApplication

// Lets your project know where all your Spring Beans are
// Spring beans are your annotated classes, like controllers, services, entities, repos
@ComponentScan(basePackages = "com.SallysBottomBarrell")
public class SallysApplication {

	public static void main(String[] args) {
		SpringApplication.run(SallysApplication.class, args);
	}

}
