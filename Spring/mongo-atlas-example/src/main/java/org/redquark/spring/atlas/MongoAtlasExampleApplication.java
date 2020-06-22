package org.redquark.spring.atlas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "org.redquark.spring.atlas.controllers")
public class MongoAtlasExampleApplication {

	public static void main(String[] args) {
		SpringApplication.run(MongoAtlasExampleApplication.class, args);
	}
}
