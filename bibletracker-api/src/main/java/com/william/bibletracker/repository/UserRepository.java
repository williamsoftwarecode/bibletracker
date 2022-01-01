package com.william.bibletracker.repository;

import com.william.bibletracker.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(
            value = "SELECT * FROM user WHERE username = ?1 LIMIT 1",
            nativeQuery = true)
    User getByUsername(String username);
}
