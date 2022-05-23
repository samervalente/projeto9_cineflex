import {Link, useParams } from "react-router-dom";

import "./Sucess.css";
import BackButton from "../../shared/BackButton/BackButton";


export default function Sucess({infos, sessionID}) {

  
  return (
    <>
    <BackButton  route={`/sessao/${sessionID}`}/>
      <div className="box">
        <div className="AllInfos">
          <h4 className="sucessTitle">Pedido feito com sucesso!</h4>

          <div className="resume">
            <h5>Filme e sessão</h5>
            <p>{infos.nameFilm}</p>
            <p>{infos.date } - {infos.horary} </p>
          </div>
          <div className="resume">
            <h5>Ingressos</h5>
            {infos.seats.map(seat => {
             return (<p>Assento {seat}</p>)
            })}
          </div>
          <div className="resume">
            <h5>Comprador</h5>
            <p>Nome: {infos.userName}</p>
            <p>CPF: {infos.userCPF}</p>
          </div>
        </div>
        <Link to="/">
        <button className="reservar">Voltar pra Home</button>
        </Link>
      </div>
    </>
  );
}
