package org.redquark.spring.instructor.course;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 * @author Anirudh Sharma
 *
 */
@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class CourseController {

	@Autowired
	private CourseHardcodedService service;

	@GetMapping("/instructors/{name}/courses")
	public List<Course> getAllCourses(@PathVariable String name) {
		return service.findAll();
	}

	@DeleteMapping("/instructors/{name}/courses/{id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable String name, @PathVariable long id) {
		Course course = service.deleteById(id);
		if (course != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

	@GetMapping("/instructors/{name}/courses/{id}")
	public Course getCourse(@PathVariable String name, @PathVariable long id) {
		return service.findById(id);
	}

	@PutMapping("/instructors/{name}/courses/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable String name, @PathVariable long id, @RequestBody Course course) {
		Course courseUpdated = service.save(course);
		return new ResponseEntity<>(courseUpdated, HttpStatus.OK);
	}

	@PostMapping("/instructors/{name}/courses")
	public ResponseEntity<Void> createCourse(@PathVariable String name, @RequestBody Course course) {
		Course createdCourse = service.save(course);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}
}
