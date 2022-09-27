import { useState } from "react";
import { Movie } from "../../../Models/Movie";
import './styles.css';

type SlideItemProps = {
    movie: Movie;
}

export const SlideItem = ({ movie }: SlideItemProps) => {
    const [width, setWidth] = useState(0);

    return (
        <div className="slide-item">
            <img src={movie.avatar} alt="Poster" />
            <h2>{movie.titulo}</h2>
        </div>
    );
}