import { Link } from "react-router-dom";

export const MovieItem = ({id, title, poster_path}) => (

    <div> 
        <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`}/>
        {/* <Link to={`/movies/${id}`}>{title}</Link> */}
    </div>
);