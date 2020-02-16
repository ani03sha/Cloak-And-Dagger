package org.redquark.spring.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Anirudh Sharma
 *
 */
@Controller
public class HelloWorldController {

	@RequestMapping("/")
	@ResponseBody
	String index() {
		return "Hello, World!";
	}
}
