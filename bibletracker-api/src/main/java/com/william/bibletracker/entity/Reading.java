package com.william.bibletracker.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Reading {

    @Id
    @GeneratedValue
    private long id;

    private Date date;

    private String username;

    private String book;

    private int chapter;

    protected Reading() {

    }

    public Reading(Date date, String username, String book, int chapter) {
        this.date = date;
        this.username = username;
        this.book = book;
        this.chapter = chapter;
    }

    public long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public String getUsername() {
        return username;
    }

    public String getBook() {
        return book;
    }

    public int getChapter() {
        return chapter;
    }

    @Override
    public String toString() {
        return "Reading{" +
                "id=" + id +
                ", date=" + date +
                ", user=" + username +
                ", book='" + book + '\'' +
                ", chapter='" + chapter + '\'' +
                '}';
    }
}
