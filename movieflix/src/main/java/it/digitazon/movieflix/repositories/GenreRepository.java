package it.digitazon.movieflix.repositories;

import it.digitazon.movieflix.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre,Long> {
}
