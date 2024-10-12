import { MovieItem } from "./MovieItem";

export const MovieList = ({movies}) => (
    <section className="scroll-holder">
        <div className="scroll-tray">
            {movies.map(movie => <MovieItem key={movie.id} {...movie}/>)}
        </div>
    </section>

);