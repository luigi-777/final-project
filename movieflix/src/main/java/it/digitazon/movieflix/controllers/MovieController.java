package it.digitazon.movieflix.controllers;


import it.digitazon.movieflix.dto.GenreDTO;
import it.digitazon.movieflix.dto.MovieDTO;
import it.digitazon.movieflix.entities.Genre;
import it.digitazon.movieflix.entities.Movie;
import it.digitazon.movieflix.services.GenreService;
import it.digitazon.movieflix.services.MovieService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private GenreService genreService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<MovieDTO> getMovies(){
        return movieService.getAll()
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    @GetMapping("/{id}")
    public MovieDTO getMovieById(@PathVariable long id){
        return convertToDTO(movieService.getById(id));
    }

    @PostMapping
    public MovieDTO createMovie(@RequestBody MovieDTO newMovie){
        Movie movie = convertToEntity(newMovie);
        movie = movieService.create(movie);

        return convertToDTO(movie);
    }

    @PutMapping("/{id}")
    public MovieDTO updateMovie(@PathVariable long id, @RequestBody MovieDTO updateMovie){
        Movie movie = convertToEntity(updateMovie);
        movie = movieService.update(id,movie);

        return convertToDTO(movie);
    }

    @DeleteMapping("/{id}")
    public MovieDTO deleteMovie(@PathVariable long id){
        return convertToDTO(movieService.delete(id));
    }

    @GetMapping("/{id}/genre")
    public GenreDTO getGenre(@PathVariable long id){
        Movie movie = movieService.getById(id);

        return convertToGenreDTO(movie.getGenre());
    }

    private MovieDTO convertToDTO(Movie movie){
        return modelMapper.map(movie, MovieDTO.class);
    }

    private Movie convertToEntity(MovieDTO dto){
        Movie movie = modelMapper.map(dto, Movie.class);

        Genre movieGenre = genreService.getById(dto.getIdGenre());

        movie.setGenre(movieGenre);

        return movie;
    }
    private GenreDTO convertToGenreDTO (Genre genre){
        return modelMapper.map(genre, GenreDTO.class);
    }
}
