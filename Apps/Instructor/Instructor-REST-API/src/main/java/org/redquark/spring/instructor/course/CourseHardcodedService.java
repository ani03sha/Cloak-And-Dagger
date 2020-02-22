package org.redquark.spring.instructor.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

/**
 * @author Anirudh Sharma
 *
 */
@Service
public class CourseHardcodedService {

	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		courses.add(new Course(++idCounter, "RedQuark", "Learn Java"));
		courses.add(new Course(++idCounter, "RedQuark", "Learn Python"));
		courses.add(new Course(++idCounter, "RedQuark", "Learn JavaScript"));
		courses.add(new Course(++idCounter, "RedQuark", "Learn C"));
	}
	
	public List<Course> findAll() {
		return courses;
	}
}
