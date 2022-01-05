package com.william.bibletracker;

import com.william.bibletracker.entity.BibleChapters;
import com.william.bibletracker.repository.interfaces.ChaptersReadForBook;
import com.william.bibletracker.entity.Reading;
import com.william.bibletracker.repository.BibleRepository;
import com.william.bibletracker.repository.ReadingRepository;
import com.william.bibletracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://192.168.0.203:4200")
@RestController
public class ReadingController {

    @Autowired
    BibleRepository bibleRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    ReadingRepository readingRepository;

    /*
    Note:   Not best practice - URL resource names should be nouns
            Would have been better to standardized it as "/read" and delegate function to HTTP method
            This is just a prototype
     */

    @PostMapping(value = "/addRead/{username}/{book}/{chapter}")
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

    @DeleteMapping(value = "/deleteRead/{username}/{book}/{chapter}")
    public boolean deleteRead(@PathVariable String username,
                              @PathVariable String book,
                              @PathVariable int chapter) {
        Reading reading = readingRepository.getReading(username, book, chapter);
        if (userRepository.getByUsername(username) != null &&
                reading!= null) {
            readingRepository.delete(reading);
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

    @GetMapping(value = "/getLastRead/{username}")
    public Reading getLastRead(@PathVariable String username) {
        return readingRepository.findMostRecentByUsername(username);
    }

    @GetMapping(value = "/getCompletedChapters/{username}")
    public long getCompletedChaptersForUser(@PathVariable String username) {
        return readingRepository.getCompletedChaptersForUser(username);
    }

    @GetMapping(value = "/getCompletedChaptersByBook/{username}")
    public List<ChaptersReadForBook> getCompletedChaptersByBookForUser(@PathVariable String username) {
        List<ChaptersReadForBook> unsorted = readingRepository.getCompletedChaptersByBookForUser(username);
        List<ChaptersReadForBook> sorted = new ArrayList<>();

        BibleChaptersUtils.getBibleChapters().forEach((book, chaptersRead) -> {
            Optional<ChaptersReadForBook> chaptersReadForBook = unsorted.stream()
                    .filter(crfb -> crfb.getBook().equals(book))
                    .findFirst();
            if (chaptersReadForBook.isPresent()) {
                sorted.add(chaptersReadForBook.get());
            }
        });

        return sorted;
    }

    @GetMapping(value = "/getBible")
    public List<BibleChapters> getBible() {
        return bibleRepository.findAll();
    }
}
