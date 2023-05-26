package it.digitazon.movieflix.controllers;


import it.digitazon.movieflix.dto.GenreDTO;
import it.digitazon.movieflix.dto.MovieDTO;
import it.digitazon.movieflix.entities.Genre;
import it.digitazon.movieflix.entities.Movie;
import it.digitazon.movieflix.services.GenreService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/genres")
@CrossOrigin(origins = "http://localhost:3000")
public class GenreController {

    @Autowired
    private GenreService genreService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<GenreDTO> getGenres(){
        return genreService.getAll()
                .stream()
                .map(this::convertToDTO)
                .toList();
}

@GetMapping("/{id}")
public GenreDTO getGenreById(@PathVariable long id){
        return convertToDTO(genreService.getById(id));
}
@PostMapping
public GenreDTO createGenre(@RequestBody GenreDTO newGenre){
        Genre genre = convertToEntity(newGenre);
        genre = genreService.create(genre);

        return convertToDTO(genre);
}

@PutMapping("/{id}")
public GenreDTO updateGenre(@PathVariable long id, @RequestBody GenreDTO updateGenre){
        Genre genre = convertToEntity(updateGenre);
        genre = genreService.update(id, genre);

        return convertToDTO(genre);
}

@DeleteMapping("/{id}")
public GenreDTO deleteGenre(@PathVariable long id){
        return convertToDTO(genreService.delete(id));
}

@GetMapping("/{id}/movies")
public List<MovieDTO> getMovies(@PathVariable long id){
        Genre genre = genreService.getById(id);

        return genre.getMovies()
                .stream()
                .map(this::convertToMovieDTO)
                .toList();
}

private GenreDTO convertToDTO (Genre genre){
    return modelMapper.map(genre, GenreDTO.class);
    }

    private Genre convertToEntity (GenreDTO dto){
        return modelMapper.map(dto, Genre.class);
    }

    private MovieDTO convertToMovieDTO(Movie movie) {
        return modelMapper.map(movie, MovieDTO.class);
    }
}
