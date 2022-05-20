import { createContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./Session.css";
import Sucess from "../Sucess/Sucess";

const reserve = {
  ids: [],
  name: "",
  cpf: "",
};

let arr = []


const note = {
  nameFilm:"",
  daySession:"",
  hourSession:"",
  seats:[],
  nameBuyer: "",
  cpfBuyer: ""
}


function Assento({ status, seat, idSeat, escolherAssento, setSeat}) {
  const [statusSeat, setStatusSeat] = useState(false);

  function validateSeat() {
   
    if (reserve.ids.length > 0) {
      setSeat(true);
    } else {
      setSeat(false);
    }
  }

  function escolherAssento(id) {
    setStatusSeat(!statusSeat);
   
    if (!statusSeat === true) {
      reserve.ids.push(id);
      note.seats.push(seat)

      
    } else if (!statusSeat === false) {
      let posicaoReserve = reserve.ids.indexOf(id);
      let posicaoChoice = note.seats.indexOf(seat)
     
        reserve.ids.splice(posicaoReserve, 1);
        note.seats.splice(posicaoChoice, 1)
      
    }

    for(let i = 0; i < note.seats.length; i ++){
      let menor = i ;
      for(let j = (i+1); j < note.seats.length; j++){
        if(note.seats[j] < note.seats[menor]){
          i = j
        }
      }
      let aux = note.seats[menor]
      note.seats[menor] = note.seats[i]
      note.seats[i] = aux
  }
    console.log(note.seats)
    validateSeat();
  }

  return (
    <>
      {status ? (
        <div
          className={`assento grid-item ${statusSeat ? "selecionado" : null}`}
          onClick={() => escolherAssento(idSeat)}
        >
          {seat}
        </div>
      ) : (
        <div
          className="assento grid-item indisponível"
          onClick={() => alert("Este assento não está disponível.")}
        >
          {seat}
        </div>
      )}
    </>
  );
}

export default function Session() {
  const { idSession } = useParams();

  const [poster, setPoster] = useState({});
  const [seats, setSeats] = useState([]);
  const [done, setDone] = useState(false);
  const [seat, setSeat] = useState(false);
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");

  reserve.name = name;
  reserve.cpf = cpf;
  note.nameBuyer = name;
  note.cpfBuyer = cpf;

  function validateForm() {
    console.log(name.length);
   
    if (name.length > 2 && cpf.length > 5) {
      setForm(true);
    } else {
      setForm(false);
    }

    if (form === true && seat === true) {
      setDone(true);
      console.log(done);
    }
  
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`
    );
    promise.then((resposta) => {
      setSeats([...resposta.data.seats]);
      setPoster(resposta.data.movie);
    });
  }, []);

  useEffect(() => {
    axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      reserve
    );
  }, [done]);

  const AllSeatsIds = seats.map((id) => {
    return id.id;
  });

  console.log(note)

  return (
    <>
      <div className="box">
        <h4>Selecione o(s) assento(s)</h4>

        <div className="grid-container">
          {seats.map((num, index) => (
            <Assento
              key={index}
              status={num.isAvailable}
              index={index}
              seat={index + 1}
              idSeat={num.id}
              AllSeatsIds={AllSeatsIds}
              setSeat={setSeat}
              done={done}
              
            />
          ))}
        </div>
        <div className="status">
          <div>
            <div className="assento selecionado"></div>
            <p>Selecionado </p>
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
          <form>
            <div>
              <p>Nome do comprador (min 3 caracteres):</p>
              <input
                placeholder="Digite seu nome..."
                onChange={(event) => {
                  setName(event.target.value);
                  validateForm();
                }}
                required
              />
            </div>
            <div>
              <p>CPF do comprador:</p>
              <input type="number"
                placeholder="Digite seu CPF..."
                onChange={(event) => {
                  setCPF(event.target.value);
                  validateForm();
                }}
                required
              />
            </div>
          </form>
        </div>

        {done ? (
          <Link to="/sucesso">
            {" "}
            <button className="reservar">Reservar assento(s)</button>{" "}
          </Link>
        ) : (
          <button className="reservar gray ">Reservar assento(s)</button>
        )}
      </div>

      <div className="Footer">
        <div className="movie">
          <img className="cartaz" src={poster.posterURL} alt="Poster" />
        </div>
        <p>{poster.title}</p>
      </div>
    </>
  );
}

// function DisplayWarning(statusAlert){

//   return (
//     <>
//       {statusAlert === "warning" ?
//       <span className="warning">
//      <ion-icon name="alert-circle"></ion-icon> Esse assento não está disponível</span> :
//      <span className="warning hidden">
//      <ion-icon name="alert-circle"></ion-icon> Esse assento não está disponível</span>}
//     </>
//   )
// }
