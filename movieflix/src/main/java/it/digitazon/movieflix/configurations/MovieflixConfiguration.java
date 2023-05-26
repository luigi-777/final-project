package it.digitazon.movieflix.configurations;


import it.digitazon.movieflix.dto.MovieDTO;
import it.digitazon.movieflix.entities.Movie;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MovieflixConfiguration {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();

        TypeMap<Movie, MovieDTO> movieToDTOMapper = modelMapper.createTypeMap(Movie.class, MovieDTO.class);

        movieToDTOMapper.addMapping(Movie::getPublishDate, MovieDTO::convertDateToString);

        TypeMap<MovieDTO, Movie> DTOToMovieMapper = modelMapper.createTypeMap(MovieDTO.class, Movie.class);
        DTOToMovieMapper.addMapping(MovieDTO::convertPublishDate, Movie::setPublishDate);

        return modelMapper;
    }
}
