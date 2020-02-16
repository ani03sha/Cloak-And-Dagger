package org.redquark.spring.example.controllers;

import org.redquark.spring.example.entities.IssueReport;
import org.redquark.spring.example.repositories.IssueRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

/**
 * @author Anirudh Sharma
 *
 */
@Controller
public class IssueController {

	private IssueRepository issueRepository;

	public IssueController(IssueRepository issueRepository) {
		this.issueRepository = issueRepository;
	}

	@GetMapping("/issuereport")
	public String getReport(Model model) {
		model.addAttribute("issuereport", new IssueReport());
		return "issues/issuereport_form";
	}

	@PostMapping("/issuereport")
	public String submitReport(IssueReport issueReport, Model model) {
		IssueReport result = this.issueRepository.save(issueReport);
		model.addAttribute("submitted", true);
		model.addAttribute("issuereport", result);
		return "redirect:/issuereport";
	}

	@GetMapping("/issues")
	public String getIssues(Model model) {
		model.addAttribute("issues", this.issueRepository.findAllButPrivate());
		return "issues/issuereport_list";
	}
}
