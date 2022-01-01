package com.william.bibletracker;

import com.william.bibletracker.repository.BibleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.io.*;
import java.nio.charset.StandardCharsets;

@Component
@Transactional
public class BibleRepositoryCommandLineRunner implements CommandLineRunner {

    @Autowired
    private BibleRepository bibleRepository;

    @Autowired
    private EntityManager entityManager;

    @Override
    public void run(String... args) throws Exception {
        initializeBibleChaptersTable();
    }

    private void initializeBibleChaptersTable() {
        try {
            String sqlScript = getSqlQueryString("initialize_bible_table.sql");
            Query q = entityManager.createNativeQuery(sqlScript);
            q.executeUpdate();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String getSqlQueryString(String fileName) throws IOException {
        InputStream is = getClass().getClassLoader().getResourceAsStream(fileName);
        BufferedInputStream bis = new BufferedInputStream(is);
        ByteArrayOutputStream buf = new ByteArrayOutputStream();
        for (int result = bis.read(); result != -1; result = bis.read()) {
            buf.write((byte) result);
        }
        return buf.toString(StandardCharsets.UTF_8.name());

    }
}
