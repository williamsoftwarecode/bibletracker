package com.william.bibletracker;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class BibleChaptersGenerator {

    public static void main(String[] args) {
        generateAll();
        generateSummary();
    }

    private static void generateSummary() {
        Map<String, Integer> bookChapters = getBookChapters();
        bookChapters.forEach((book, chapters) ->
                {
                    System.out.println("('" + book + "', " + chapters + "),");
                }
        );
    }

    private static void generateAll() {
        Map<String, Integer> bookChapters = getBookChapters();
        AtomicInteger total = new AtomicInteger(1);
        bookChapters.forEach((book, chapters) ->
                {
                    for (int i = 1; i <= chapters; i++) {
                        System.out.println("(" + total.getAndIncrement() + ", '" + book + "', " + i + "),");
                    }
                }
        );
    }

    private static Map<String, Integer> getBookChapters() {
        Map<String, Integer> bookChapters = new LinkedHashMap<>();

        bookChapters.put("Genesis", 50);
        bookChapters.put("Exodus", 40);
        bookChapters.put("Leviticus", 27);
        bookChapters.put("Numbers", 36);
        bookChapters.put("Deuteronomy", 34);
        bookChapters.put("Joshua", 24);
        bookChapters.put("Judges", 21);
        bookChapters.put("Ruth", 4);
        bookChapters.put("1 Samuel", 31);
        bookChapters.put("2 Samuel", 24);
        bookChapters.put("1 Kings", 22);
        bookChapters.put("2 Kings", 25);
        bookChapters.put("1 Chronicles", 29);
        bookChapters.put("2 Chronicles", 36);
        bookChapters.put("Ezra", 10);
        bookChapters.put("Nehemiah", 13);
        bookChapters.put("Esther", 10);
        bookChapters.put("Job", 42);
        bookChapters.put("Psalms", 150);
        bookChapters.put("Proverbs", 31);
        bookChapters.put("Ecclesiastes", 12);
        bookChapters.put("Song of Solomon", 8);
        bookChapters.put("Isaiah", 66);
        bookChapters.put("Jeremiah", 52);
        bookChapters.put("Lamentations", 5);
        bookChapters.put("Ezekiel", 48);
        bookChapters.put("Daniel", 12);
        bookChapters.put("Hosea", 14);
        bookChapters.put("Joel", 3);
        bookChapters.put("Amos", 9);
        bookChapters.put("Obadiah", 1);
        bookChapters.put("Jonah", 4);
        bookChapters.put("Micah", 7);
        bookChapters.put("Nahum", 3);
        bookChapters.put("Habakkuk", 3);
        bookChapters.put("Zephaniah", 3);
        bookChapters.put("Haggai", 2);
        bookChapters.put("Zechariah", 14);
        bookChapters.put("Malachi", 4);
        bookChapters.put("Matthew", 28);
        bookChapters.put("Mark", 16);
        bookChapters.put("Luke", 24);
        bookChapters.put("John", 21);
        bookChapters.put("Acts", 28);
        bookChapters.put("Romans", 16);
        bookChapters.put("1 Corinthians", 16);
        bookChapters.put("2 Corinthians", 13);
        bookChapters.put("Galatians", 6);
        bookChapters.put("Ephesians", 6);
        bookChapters.put("Philippians", 4);
        bookChapters.put("Colossians", 4);
        bookChapters.put("1 Thessalonians", 5);
        bookChapters.put("2 Thessalonians", 3);
        bookChapters.put("1 Timothy", 6);
        bookChapters.put("2 Timothy", 4);
        bookChapters.put("Titus", 3);
        bookChapters.put("Philemon", 1);
        bookChapters.put("Hebrews", 13);
        bookChapters.put("James", 5);
        bookChapters.put("1 Peter", 5);
        bookChapters.put("2 Peter", 3);
        bookChapters.put("1 John", 5);
        bookChapters.put("2 John", 1);
        bookChapters.put("3 John", 1);
        bookChapters.put("Jude", 1);
        bookChapters.put("Revelation", 22);

        return bookChapters;
    }
}
