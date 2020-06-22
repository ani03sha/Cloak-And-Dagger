package org.redquark.spring.atlas.controllers;

import org.redquark.spring.atlas.data.User;
import org.redquark.spring.atlas.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return new ArrayList<>(userRepository.findAll());
    }

    @PostMapping("/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public User add(@RequestBody User user) {
        return userRepository.save(user);
    }
}
