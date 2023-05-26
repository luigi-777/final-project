package it.digitazon.movieflix.dto;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MovieDTO {

    public static final SimpleDateFormat dateFormat = new  SimpleDateFormat("yyyy-MM-dd");
    private long id;
    private String name;
    private Integer duration;
    private long idGenre;
    private boolean isDeleted;
    private String publishDate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public long getIdGenre() {
        return idGenre;
    }

    public void setIdGenre(long idGenre) {
        this.idGenre = idGenre;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public String getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(String publishDate) {
        this.publishDate = publishDate;
    }
    public Date convertPublishDate() {
        if (this.publishDate == null || this.publishDate.length() == 0){
            return null;
        }
        try {
            return dateFormat.parse(this.publishDate);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

    }

    public void convertDateToString(Date date) {
        if (date == null) {
            this.publishDate = null;
        } else {


            this.publishDate = dateFormat.format(date);
        }
    }
}

