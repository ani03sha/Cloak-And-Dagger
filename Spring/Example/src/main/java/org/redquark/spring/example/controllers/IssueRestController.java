package org.redquark.spring.example.controllers;

import java.util.List;
import java.util.Optional;

import org.redquark.spring.example.entities.IssueReport;
import org.redquark.spring.example.repositories.IssueRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Anirudh Sharma
 *
 */
@RestController
@RequestMapping("/api/issues")
public class IssueRestController {

	private IssueRepository issueRepository;

	public IssueRestController(IssueRepository issueRepository) {
		this.issueRepository = issueRepository;
	}

	@GetMapping
	public List<IssueReport> getIssues() {
		return issueRepository.findAllButPrivate();
	}

	@GetMapping("/{id}")
	public ResponseEntity<IssueReport> getIssue(@PathVariable("id") Optional<IssueReport> IssueReportOptional) {
		if (!IssueReportOptional.isPresent()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(IssueReportOptional.get(), HttpStatus.OK);
	}
}
