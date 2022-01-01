package com.william.bibletracker;

import com.william.bibletracker.entity.BibleChapters;
import com.william.bibletracker.entity.Reading;
import com.william.bibletracker.repository.BibleRepository;
import com.william.bibletracker.repository.ReadingRepository;
import com.william.bibletracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class ReadingController {

    @Autowired
    BibleRepository bibleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    ReadingRepository readingRepository;

    @GetMapping(value = "/addRead/{username}/{book}/{chapter}")
    public boolean addRead(@PathVariable String username,
                        @PathVariable String book,
                        @PathVariable int chapter) {
        if (userRepository.getByUsername(username) != null &&
                readingRepository.getReading(username, book, chapter) == null) {
            readingRepository.save(new Reading(new Date(), username, book, chapter));
            return true;
        } else {
            return false;
        }
    }

    @GetMapping(value = "/getAllRead/{username}")
    public List<Reading> getAllRead(@PathVariable String username) {
        return readingRepository.findAllByUsername(username);
    }

    @GetMapping(value = "/getChaptersReadByBook/{username}/{book}")
    public List<Reading> getChaptersReadByBook(
            @PathVariable String username,
            @PathVariable String book) {
        return readingRepository.findAllByUsernameAndBook(username, book);
    }

    @GetMapping(value = "/getBible")
    public List<BibleChapters> getBible() {
        return bibleRepository.findAll();
    }
}
