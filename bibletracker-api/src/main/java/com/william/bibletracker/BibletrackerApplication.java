package com.william.bibletracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.stereotype.Controller;

@Controller
@SpringBootApplication
public class BibletrackerApplication extends WebMvcAutoConfiguration {

	public static void main(String[] args) {
		SpringApplication.run(BibletrackerApplication.class, args);
	}

}
