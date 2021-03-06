package com.william.bibletracker.repository;

import com.william.bibletracker.repository.interfaces.ChaptersReadForBook;
import com.william.bibletracker.entity.Reading;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReadingRepository extends JpaRepository<Reading, Long> {

    @Query(
            value = "SELECT * FROM reading WHERE username = ?1 AND book = ?2 AND chapter =?3 LIMIT 1",
            nativeQuery = true)
    Reading getReading(String username, String book, int chapter);

    @Query(
            value = "SELECT * FROM reading WHERE username = ?1",
            nativeQuery = true)
    List<Reading> findAllByUsername(String username);

    @Query(
            value = "SELECT * FROM reading WHERE username = ?1 AND book = ?2",
            nativeQuery = true)
    List<Reading> findAllByUsernameAndBook(String username, String book);

    @Query(
            value = "SELECT * FROM reading WHERE username = ?1 ORDER BY date DESC LIMIT 1",
            nativeQuery = true)
    Reading findMostRecentByUsername(String username);

    @Query(
            value = "SELECT COUNT(*) FROM reading WHERE username = ?1",
            nativeQuery = true)
    long getCompletedChaptersForUser(String username);

    @Query(
            value = "SELECT book AS book, COUNT(*) AS chaptersRead FROM reading WHERE username = ?1 GROUP BY book",
            nativeQuery = true)
    List<ChaptersReadForBook> getCompletedChaptersByBookForUser(String username);
}
