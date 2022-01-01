package com.william.bibletracker.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private long id;

    private String username;

    private String password;

    protected User() {

    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(String username) {
        this.username = username;
        this.password = "";
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public boolean isPasswordCorrect(String passwordEntered) {
        return password.equals(passwordEntered);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + username + '\'' +
                '}';
    }
}
