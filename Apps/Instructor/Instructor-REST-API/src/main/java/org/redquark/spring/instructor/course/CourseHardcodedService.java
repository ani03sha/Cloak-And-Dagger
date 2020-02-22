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

	public Course deleteById(long id) {
		Course course = findById(id);
		if (course == null) {
			return null;
		}
		if (courses.remove(course)) {
			return course;
		}
		return null;	
	}

	public Course findById(long id) {
		for (Course course : courses) {
			if (course.getId() == id) {
				return course;
			}
		}
		return null;
	}
	
	public Course save(Course course) {
		if(course.getId() == -1 || course.getId() == 0) {
			course.setId(++idCounter);
			courses.add(course);
		} else {
			deleteById(course.getId());
			courses.add(course);
		}
		return course;
	}
}
