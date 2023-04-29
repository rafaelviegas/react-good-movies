import { useEffect, useState } from "react";
import MovieService from "../services/MovieService";
import { useParams } from "react-router-dom";

export const Detail = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
  
    useEffect(() => {
        MovieService
            .getMovieById(id)
            .then(movie => {
                setMovie(movie);
            });  
  
    }, [id]); 
  
    
    return (
        <>
            <h1>{movie.title}</h1>
            <article>{movie.overview}</article>
        </>
)};