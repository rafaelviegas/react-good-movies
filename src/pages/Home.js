import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList";
import MovieService from "../services/MovieService";

export const Home = () => {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      MovieService
        .getPopularMovies()
        .then(movie => {
          setMovies(movie);
        });  
    }, []); 
  
    
    return (
      <MovieList movies={movies}/>
)};