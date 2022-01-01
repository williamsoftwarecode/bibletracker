package com.william.bibletracker;

import com.william.bibletracker.entity.User;
import com.william.bibletracker.repository.BibleRepository;
import com.william.bibletracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://192.168.0.203:4200")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/createUser/{username}/{password}")
    public String createUser(@PathVariable String username, @PathVariable String password) {
        if (userRepository.getByUsername(username) == null) {
            User user = new User(username, password);
            userRepository.save(user);
            List<User> allUsers = userRepository.findAll();
            System.out.println("All users: " + allUsers);

            return String.valueOf(user.getUsername());
        } else {
            return "Username already taken!";
        }
    }

    @GetMapping(value = "/login/{username}/{password}")
    public boolean login(@PathVariable String username, @PathVariable String password) {
        User user = userRepository.getByUsername(username);
        if (user != null) {
            return user.isPasswordCorrect(password);
        } else {
            return false;
        }
    }
}
