package it.digitazon.movieflix.entities;


import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "duration")
    private Integer duration;

    @Column(name = "is_deleted", nullable = false, columnDefinition = "BOOLEAN NOT NULL DEFAULT false")
    private boolean isDeleted;

    @Column(name = "publish_date")
    private Date publishDate;

    @ManyToOne
    @JoinColumn(name = "id_genre", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Genre genre;

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

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }
}
