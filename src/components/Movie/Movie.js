import { useState, useEffect } from "react";
import { Link, useParams, } from "react-router-dom";
import axios from "axios";

import "./Movie.css";
import Footer from "../../shared/Footer/Footer"
import BackButton from "../../shared/BackButton/BackButton"

export default function Movie({infos, setMovieID}) {
  const [movie, setMovie] = useState({});
  const {idMovie}  = useParams();
  const [dayes, setDayes] = useState([]);


  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
    );

    promise.then((resposta) => {
      setMovie({ ...resposta.data });
      setDayes([...resposta.data.days]);
      setMovieID(resposta.data.id)
    });
  }, []);


  let sessions = dayes.map((object, index) => {
    return (
      <div key={index} className="section">
        <p>
          {object.weekday} - {object.date}
        </p>
        <div className="buttons">
          <Link to={`/sessao/${object.showtimes[0].id}`}>
            <button>{object.showtimes[0].name}</button>
          </Link>

          <Link to={`/sessao/${object.showtimes[1].id}`}>
            <button>{object.showtimes[1].name}</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <>
      <BackButton route={"/"} />
      <div className="box">
        <h4>Selecione o horário</h4>
        {sessions}
      </div>
      <Footer poster={movie.posterURL} title={movie.title} session={""} />
    </>
  );
}
