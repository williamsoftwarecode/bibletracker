package com.william.bibletracker.repository;

import com.william.bibletracker.entity.BibleChapters;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BibleRepository extends JpaRepository<BibleChapters, Integer> {
}
