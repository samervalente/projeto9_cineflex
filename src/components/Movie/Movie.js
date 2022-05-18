import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./Movie.css";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const { idMovie } = useParams();
  const [days, setDays] = useState([]);

  useEffect(() => {
  
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
    );

    promise.then((resposta) => {
      setMovie({ ...resposta.data });
      setDays(...days,resposta.data.days);
    })
   
  }, [])

  console.log(days)
  let infos = days.map(object => {
   return  <div className="section">
   <p>{object.weekday} - {object.date}</p>
   <div className="buttons"> 

      <Link to={`/sessao/${movie.id}`}>
        <button>15:00</button>
      </Link>
        
        <Link to={`/sessao/${movie.id}`}>
          <button>19:00</button>
          </Link> 
   </div>
</div>
  })


  return (
    <>
      <div className="box">
        <h4>Selecione o horário</h4>
          {infos}
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
