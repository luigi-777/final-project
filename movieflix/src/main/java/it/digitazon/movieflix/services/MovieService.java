package it.digitazon.movieflix.services;


import it.digitazon.movieflix.entities.Movie;
import it.digitazon.movieflix.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> getAll(){
        return movieRepository.findAll();
    }

    public Movie getById(long id){
        Optional<Movie> optionalMovie = movieRepository.findById(id);

        if(optionalMovie.isEmpty()){
            throw new IllegalStateException("Movie not found");
        }

        return optionalMovie.get();
    }

    public Movie create(Movie newMovie){
        if(newMovie.getGenre() == null){
            throw new IllegalStateException("Genre must not be null");
        }

        newMovie = movieRepository.save(newMovie);
        return newMovie;
    }

    public Movie update(long id, Movie updateMovie){
        if(updateMovie.getGenre() == null){
            throw new IllegalStateException("Genre must not be null");
        }
        Optional<Movie> optionalMovie = movieRepository.findById(id);
        if(optionalMovie.isEmpty()){
            throw new IllegalStateException("Movie not found");
        }
        Movie entityToUpdate = optionalMovie.get();

        updateMovie.setId(entityToUpdate.getId());

        updateMovie = movieRepository.save(updateMovie);

        return updateMovie;
    }

    public Movie delete(long id){
        Optional<Movie> optionalMovie = movieRepository.findById(id);
        if(optionalMovie.isEmpty()){
            throw new IllegalStateException("Movie not found");
        }
        Movie entityToDelete = optionalMovie.get();

        movieRepository.delete(entityToDelete);

        return entityToDelete;
    }
}
