import { useEffect, useState, useRef } from "react";
import { api } from "../../api";
import { Movie } from "../../Models/Movie";
import { Slide } from "../Slide";
import { SlideItem } from "../Slide/SlideItem";
import loadingIcon from "../../assets/img/spinner.gif";
import './styles.css'

export const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async () => {
        setLoading(true);

        let response = await api.loadMovies();
        setLoading(false);
        setMovies(response);

    }

    return (
        <div className="movies">

            <div className="movies-length">
                <h2>No momento existem <span>{movies.length}</span> filmes em cartaz</h2>
            </div>

            {loading &&
                <div>
                    <img src={loadingIcon} alt="" />
                </div>
            }

            <Slide>
                {movies.map((movie, index) => (
                    <SlideItem movie={movie} key={index} />
                ))}
            </Slide>

        </div>
    );
}
