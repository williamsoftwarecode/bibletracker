package com.william.bibletracker;

import java.util.LinkedHashMap;
import java.util.Map;

public class BibleChaptersUtils {

    static Map<String, Integer> bibleChapters = new LinkedHashMap<>();

    private BibleChaptersUtils() throws Exception {
        throw new Exception("Cannot instantiate utility class.");
    }

    public static Map<String, Integer> getBibleChapters() {
        initializeBibleChapters();
        return bibleChapters;
    }

    private static void initializeBibleChapters() {
        if (bibleChapters.isEmpty()) {
            bibleChapters.put("Genesis", 50);
            bibleChapters.put("Exodus", 40);
            bibleChapters.put("Leviticus", 27);
            bibleChapters.put("Numbers", 36);
            bibleChapters.put("Deuteronomy", 34);
            bibleChapters.put("Joshua", 24);
            bibleChapters.put("Judges", 21);
            bibleChapters.put("Ruth", 4);
            bibleChapters.put("1 Samuel", 31);
            bibleChapters.put("2 Samuel", 24);
            bibleChapters.put("1 Kings", 22);
            bibleChapters.put("2 Kings", 25);
            bibleChapters.put("1 Chronicles", 29);
            bibleChapters.put("2 Chronicles", 36);
            bibleChapters.put("Ezra", 10);
            bibleChapters.put("Nehemiah", 13);
            bibleChapters.put("Esther", 10);
            bibleChapters.put("Job", 42);
            bibleChapters.put("Psalms", 150);
            bibleChapters.put("Proverbs", 31);
            bibleChapters.put("Ecclesiastes", 12);
            bibleChapters.put("Song of Solomon", 8);
            bibleChapters.put("Isaiah", 66);
            bibleChapters.put("Jeremiah", 52);
            bibleChapters.put("Lamentations", 5);
            bibleChapters.put("Ezekiel", 48);
            bibleChapters.put("Daniel", 12);
            bibleChapters.put("Hosea", 14);
            bibleChapters.put("Joel", 3);
            bibleChapters.put("Amos", 9);
            bibleChapters.put("Obadiah", 1);
            bibleChapters.put("Jonah", 4);
            bibleChapters.put("Micah", 7);
            bibleChapters.put("Nahum", 3);
            bibleChapters.put("Habakkuk", 3);
            bibleChapters.put("Zephaniah", 3);
            bibleChapters.put("Haggai", 2);
            bibleChapters.put("Zechariah", 14);
            bibleChapters.put("Malachi", 4);
            bibleChapters.put("Matthew", 28);
            bibleChapters.put("Mark", 16);
            bibleChapters.put("Luke", 24);
            bibleChapters.put("John", 21);
            bibleChapters.put("Acts", 28);
            bibleChapters.put("Romans", 16);
            bibleChapters.put("1 Corinthians", 16);
            bibleChapters.put("2 Corinthians", 13);
            bibleChapters.put("Galatians", 6);
            bibleChapters.put("Ephesians", 6);
            bibleChapters.put("Philippians", 4);
            bibleChapters.put("Colossians", 4);
            bibleChapters.put("1 Thessalonians", 5);
            bibleChapters.put("2 Thessalonians", 3);
            bibleChapters.put("1 Timothy", 6);
            bibleChapters.put("2 Timothy", 4);
            bibleChapters.put("Titus", 3);
            bibleChapters.put("Philemon", 1);
            bibleChapters.put("Hebrews", 13);
            bibleChapters.put("James", 5);
            bibleChapters.put("1 Peter", 5);
            bibleChapters.put("2 Peter", 3);
            bibleChapters.put("1 John", 5);
            bibleChapters.put("2 John", 1);
            bibleChapters.put("3 John", 1);
            bibleChapters.put("Jude", 1);
            bibleChapters.put("Revelation", 22);
        }
    }
}
