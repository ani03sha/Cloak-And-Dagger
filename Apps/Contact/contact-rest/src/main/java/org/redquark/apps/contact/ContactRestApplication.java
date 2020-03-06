package org.redquark.apps.contact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"org.redquark.apps.contact.controllers"})
public class ContactRestApplication {

    public static void main(String[] args) {
        SpringApplication.run(ContactRestApplication.class, args);
    }

}
