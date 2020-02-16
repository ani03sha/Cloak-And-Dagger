package org.redquark.spring.example.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Anirudh Sharma
 *
 */
@Entity
@Table(name = "issues")
public class IssueReport {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String email;
	private String url;
	private String description;
	private boolean markedAsPrivate;
	private boolean updates;
	private boolean done;
	private Date created;
	private Date updated;

	public IssueReport() {
	}

	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the markedAsPrivate
	 */
	public boolean isMarkedAsPrivate() {
		return markedAsPrivate;
	}

	/**
	 * @param markedAsPrivate the markedAsPrivate to set
	 */
	public void setMarkedAsPrivate(boolean markedAsPrivate) {
		this.markedAsPrivate = markedAsPrivate;
	}

	/**
	 * @return the updates
	 */
	public boolean isUpdates() {
		return updates;
	}

	/**
	 * @param updates the updates to set
	 */
	public void setUpdates(boolean updates) {
		this.updates = updates;
	}

	/**
	 * @return the done
	 */
	public boolean isDone() {
		return done;
	}

	/**
	 * @param done the done to set
	 */
	public void setDone(boolean done) {
		this.done = done;
	}

	/**
	 * @return the created
	 */
	public Date getCreated() {
		return created;
	}

	/**
	 * @param created the created to set
	 */
	public void setCreated(Date created) {
		this.created = created;
	}

	/**
	 * @return the updated
	 */
	public Date getUpdated() {
		return updated;
	}

	/**
	 * @param updated the updated to set
	 */
	public void setUpdated(Date updated) {
		this.updated = updated;
	}
}
