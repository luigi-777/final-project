package it.digitazon.movieflix.services;


import it.digitazon.movieflix.entities.Genre;
import it.digitazon.movieflix.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;

    public List<Genre> getAll() {
        return genreRepository.findAll();
    }

    public Genre getById(long id) {
        Optional<Genre> optionalGenre = genreRepository.findById(id);
        if (optionalGenre.isEmpty()) {
            throw new IllegalStateException("Genre not found");
        }
        return optionalGenre.get();
    }

    public Genre create(Genre newGenre) {
        newGenre = genreRepository.save(newGenre);
        return newGenre;
    }

    public Genre update(long id, Genre updateGenre) {
        Optional<Genre> optionalGenre = genreRepository.findById(id);

        if(optionalGenre.isEmpty()) {
            throw new IllegalStateException("Entity not found");
        }
        Genre entityToUpdate = optionalGenre.get();
        entityToUpdate.setName(updateGenre.getName());

        entityToUpdate = genreRepository.save(entityToUpdate);

        updateGenre.setId(entityToUpdate.getId());
        return updateGenre;
    }

    public Genre delete(long id) {
        Optional<Genre> optionalGenre = genreRepository.findById(id);

        if(optionalGenre.isEmpty()){
            throw new IllegalStateException("Entity not found");
        }
        Genre entityToDelete = optionalGenre.get();
        genreRepository.delete(entityToDelete);
        return entityToDelete;
    }
}
