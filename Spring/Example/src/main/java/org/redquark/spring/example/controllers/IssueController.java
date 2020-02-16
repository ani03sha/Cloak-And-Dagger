package org.redquark.spring.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author Anirudh Sharma
 *
 */
@Controller
public class IssueController {

	@GetMapping("/issuereport")
	@ResponseBody
	public String getReport() {
		return "issues/issuereport_form";
	}
	
	@PostMapping("/issuereport")
	@ResponseBody
	public String submitReport() {
		return "issues/issuereport_form";
	}
	
	@GetMapping("/issues")
	@ResponseBody
	public String getIssues() {
		return "issues/issuereport_list";
	}
}
