import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./Session.css";


export default function Session() {
  let arr = [];
  const { idSession } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
    promise.then((resposta) => {
      setMovie({ ...resposta.data });
    })
  },[]);

  console.log(movie.movie.posterURL);

  for (let i = 1; i < 51; i++) {
    arr.push(i);
  }

  return (
    <>
      <div className="box">
        <h4>Selecione o(s) assento(s)</h4>
        <div className="grid-container">
          {arr.map((num) => (
            <div className="assento grid-item">{num}</div>
          ))}
        </div>
        <div className="status">
          <div>
            <div className="assento selecionado"></div>
            <p>Selecionado</p>
          </div>
          <div>
            <div className="assento disponível"></div>
            <p>Disponível</p>
          </div>
          <div>
            <div className="assento indisponível"></div>
            <p>Indisponível</p>
          </div>
        </div>
        <div className="infos">
          <div>
            <p>Nome do comprador:</p>
            <input placeholder="Digite seu nome..." />
          </div>
          <div>
            <p>CPF do comprador:</p>
            <input placeholder="Digite seu CPF..." />
          </div>
        </div>
        <button className="reservar">Reservar assento(s)</button>
      </div>
      <div className="Footer">
            <div className="movie">
            <img className="cartaz" src={movie.posterURL} alt="Poster" />    
            </div>
            <p>{movie.title}</p>
      </div>
    </>
  );
}

