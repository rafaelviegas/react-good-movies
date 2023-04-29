import { Link } from "react-router-dom";

export const MovieItem = ({id, title}) => (

    <li> <Link to={`/movies/${id}`}>{title}</Link></li>
);