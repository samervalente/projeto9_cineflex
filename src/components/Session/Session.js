import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./Session.css";
import Assentos from "./Assentos";
import Footer from "../../shared/Footer/Footer";
import BackButton from "../../shared/BackButton/BackButton";

export default function Session({ infos, setInfos, movieID, setSessionID }) {
  const { idSession } = useParams();
  const [horary, setHorary] = useState("");
  const [seats, setSeats] = useState([]);
  const [reserve, setReserve] = useState({
    ids: [],
    name: "",
    cpf: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`
    );
    promise.then((resposta) => {
      setSeats([...resposta.data.seats]);
      setInfos({
        nameFilm: resposta.data.movie.title,
        PosterURL: resposta.data.movie.posterURL,
        seats: [],
        userCPF: [],
        userName: [],
        date: resposta.data.day.date,
        weekday: resposta.data.day.weekday,
        horary: resposta.data.name,
      });
      setSessionID(resposta.data.id);
      setHorary(resposta.data);
    });
  }, []);

  function SentInfos(event) {
    axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      reserve
    )
    event.preventDefault();
    navigate("/sucesso");
  }

  reserve.name = infos.userName;
  reserve.cpf = infos.userCPF;

  return (
    <>
      <BackButton route={`/filme/${movieID}`} />
      <div className="box">
        <h4>Selecione o(s) assento(s)</h4>
        <div className="grid-container">
          {seats.map((num, index) => (
            <Assentos
              key={index}
              status={num.isAvailable}
              seat={index + 1}
              idSeat={num.id}
              setReserve={setReserve}
              reserve={reserve}
              infos={infos}
              setInfos={setInfos}
            />
          ))}
        </div>
        <div className="status">
          <div>
            <span className="assento selecionado"></span>
            <span className="assento disponível"></span>
            <div className="assento indisponível"></div>
          </div>
          <div>
            <p>Selecionado </p>
            <p>Disponível</p>
            <p>Indisponível</p>
          </div>
        </div>

        <div className="infos" onSubmit={SentInfos}>
          <form>
            <div className="form">
              <div>
                <p>Nome do comprador:</p>
                <input
                  type="text"
                  placeholder="Digite seu nome..."
                  onChange={(event) => {
                    setInfos({ ...infos, userName: event.target.value });
                  }}
                  value={infos.nameUser}
                  required
                />
              </div>
              <div>
                <p>CPF do comprador: </p>
                <input
                  type="number"
                  onChange={(event) => {
                    setInfos({ ...infos, userCPF: event.target.value });
                  }}
                  value={infos.userCPF}
                  placeholder="Digite seu CPF..."
                  required
                />
              </div>
            </div>

            <button type="submit" className="reservar">
              Reservar assento(s)
            </button>
          </form>
        </div>
      </div>

      <Footer
        poster={infos.PosterURL}
        title={infos.nameFilm}
        session={`${infos.weekday} - ${horary.name}`}
      />
    </>
  );
}
