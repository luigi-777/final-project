package it.digitazon.movieflix.repositories;

import it.digitazon.movieflix.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie,Long> {
}
