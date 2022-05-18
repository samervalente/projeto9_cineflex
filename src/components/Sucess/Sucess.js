import "./Sucess.css";

export default function Sucess() {
  return (
    <>
      <div className="box">
        <div className="AllInfos">
          <h4 className="sucessTitle">Pedido feito com sucesso!</h4>

          <div className="resume">
            <h5>Filme e sessão</h5>
            <p>Enola Holmes</p>
            <p>24/06/2021 15:00</p>
          </div>
          <div className="resume">
            <h5>Ingressos</h5>
            <p>Assento 15</p>
            <p>Assento 16</p>
          </div>
          <div className="resume">
            <h5>Comprador</h5>
            <p>Nome: João da Silva Sauro</p>
            <p>CPF: 123.456.789-10</p>
          </div>
        </div>
        <button className="reservar">Voltar pra Home</button>
      </div>
    </>
  );
}
