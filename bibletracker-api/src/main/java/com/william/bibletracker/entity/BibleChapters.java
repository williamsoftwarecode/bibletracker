package com.william.bibletracker.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BibleChapters {

    @Id
    @Column(unique=true)
    private String book;

    @Column(unique=true)
    private int chapter;

    public String getBook() {
        return book;
    }

    public int getChapter() {
        return chapter;
    }

    @Override
    public String toString() {
        return "{" +
                "book:'" + book + '\'' +
                ", chapter:'" + chapter + '\'' +
                '}';
    }
}
