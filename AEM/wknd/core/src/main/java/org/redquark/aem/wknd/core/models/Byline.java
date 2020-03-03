package org.redquark.aem.wknd.core.models;

import java.util.List;

/**
 * @author Anirudh Sharma
 *
 */
public interface Byline {

	/**
	 * @return a string to display as the name
	 */
	String getName();

	/**
	 * Occupations are to be sorted alphabetically in the reverse order
	 * 
	 * @return a list of occupations
	 */
	List<String> getOccupations();

	/**
	 * @return a boolean if the component has enough content to display
	 */
	boolean isEmpty();

}
