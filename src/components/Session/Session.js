import "./Session.css";

export default function Session() {
  let arr = [];

  for (let i = 1; i < 51; i++) {
    arr.push(i);
  }
  console.log(arr);

  return (
    <>
      <div className="box">
        <h4>Selecione o(s) assento(s)</h4>
        <div className="grid-container">
          {arr.map((num) => (
            <div class="assento grid-item">{num}</div>
          ))}
        </div>
        <div className="status">
          <div>
            <div class="assento selecionado"></div>
            <p>Selecionado</p>
          </div>
          <div>
            <div class="assento disponível"></div>
            <p>Disponível</p>
          </div>
          <div>
            <div class="assento indisponível"></div>
            <p>Indisponível</p>
          </div>
        </div>
        <div className="infos">
            <div>
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..."/>
            </div>
            <div>
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..."/>
            </div>
        </div>
        <button className="reservar">Reservar assento(s)</button>
      </div>
    </>
  );
}
