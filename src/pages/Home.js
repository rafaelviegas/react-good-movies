import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList";
import { MoviesContainer } from "../styles/MoviesContainer";
import MovieService from "../services/MovieService";

export const Home = () => {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      MovieService
        .getPopularMovies()
        .then(movie => {
          setMovies(movie);
        });  
        console.log('i fire once');
    }, []); 
  
    
    return (

    <MoviesContainer>
        <MovieList movies={movies}/>
    </MoviesContainer>
    
)};