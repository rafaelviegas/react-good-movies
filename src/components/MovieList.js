import { MovieItem } from "./MovieItem";

export const MovieList = ({movies}) => (
    <section>
        <ul>
            {movies.map(movie => <MovieItem key={movie.id} {...movie}/>)}
        </ul>
    </section>

);