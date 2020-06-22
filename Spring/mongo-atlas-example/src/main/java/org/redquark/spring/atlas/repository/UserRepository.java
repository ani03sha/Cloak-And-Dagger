package org.redquark.spring.atlas.repository;

import org.redquark.spring.atlas.data.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
