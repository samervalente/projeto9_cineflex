import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MovieSelection.css";


export default function MovieSelection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((resposta) => {
      setMovies([...resposta.data]);
    });
    console.log(movies);
  }, []);

  return (
    <>
      <div className="box">
        <h4>Selecione o filme</h4>
        <div className="movies">
          {movies.map((movie, index) => (
            <Link to={`/filme/${movie.id}`} key={index}>
              <div  className="movie">
                <img alt="movie" className="cartaz" src={movie.posterURL} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
