import { useState, useEffect } from "react";

export default function Assento({
  status,
  seat,
  idSeat,
  escolherAssento,
  reserve,
  setReserve,
  infos,
  setInfos
}) {
  const [statusSeat, setStatusSeat] = useState(false);

  function escolherAssento(id, seat) {
    setStatusSeat(!statusSeat);
  
    if (!statusSeat === true) {
     setInfos({...infos, seats:[...infos.seats, seat]})
     setReserve({...reserve, ids:[...reserve.ids, id]})
    }
    if (!statusSeat === false) {
      setInfos({...infos, seats:infos.seats.filter(num => num !== seat)})
      setReserve({...reserve,ids:reserve.ids.filter(num => num !== id)})
    }

  
  }

  for (let i = 0; i < infos.seats.length; i++) {
    let menor = i;
    for (let j = (i + 1); j < infos.seats.length; j++) {
      if (infos.seats[j] < infos.seats[menor]) {
        menor = j;
      }
    }
    let aux = infos.seats[menor];
    infos.seats[menor] = infos.seats[i];
    infos.seats[i] = aux;
  }

  return (
    <>
      {status ? (
        <div
          className={`assento grid-item ${statusSeat ? "selecionado" : null}`}
          onClick={() => escolherAssento(idSeat, seat)}
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
