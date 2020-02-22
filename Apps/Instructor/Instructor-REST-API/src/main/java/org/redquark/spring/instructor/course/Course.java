package org.redquark.spring.instructor.course;

import java.util.List;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author Anirudh Sharma
 *
 */
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class Course {
	
	private Long id;
	private String name;
	private String description;
	
	/**
	 * @param id
	 * @param name
	 * @param description
	 */
	public Course(Long id, String name, String description) {
		this.id = id;
		this.name = name;
		this.description = description;
	}
}
