package org.redquark.spring.example.repositories;

import java.util.List;

import org.redquark.spring.example.entities.IssueReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author Anirudh Sharma
 *
 */
public interface IssueRepository extends JpaRepository<IssueReport, Long> {

	@Query(value = "SELECT i FROM IssueReport i WHERE markedAsPrivate = false")
	List<IssueReport> findAllButPrivate();

	List<IssueReport> findAllByEmail(String email);
}
