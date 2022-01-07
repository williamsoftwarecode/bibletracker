package com.william.bibletracker;

import com.william.bibletracker.entity.User;
import com.william.bibletracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/createUser")
    public String createUser(@RequestBody Map<String,String> body) {
        String username = body.get("username");
        String password = body.get("password");

        if (userRepository.getByUsername(username) == null) {
            User user = new User(username, password);
            userRepository.save(user);
            return "User " + String.valueOf(user.getUsername()) + " created successfully!";
        } else {
            return "Username already taken!";
        }
    }

    @PostMapping(value = "/login")
    public boolean login(@RequestBody Map<String,String> body) {
        String username = body.get("username");
        String password = body.get("password");

        User user = userRepository.getByUsername(username);
        if (user != null) {
            return user.isPasswordCorrect(password);
        } else {
            return false;
        }
    }
}
