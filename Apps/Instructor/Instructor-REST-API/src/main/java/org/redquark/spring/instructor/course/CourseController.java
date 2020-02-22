package org.redquark.spring.instructor.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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
}
