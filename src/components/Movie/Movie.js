import "./Movie.css"

export default function Movie(){
    return(
        <>
        <div className="box">
            <h4>Selecione o horário</h4>
                <div className="section">
                       <p>Quinta-feira - 24/06/2021</p>
                      <div className="buttons"> <button>15:00</button>
                       <button>19:00</button> </div>
                </div>
                <div className="section">
                       <p>Sexta-feira - 25/06/2021</p>
                       <div className="buttons"> <button>15:00</button>
                       <button>19:00</button> </div>
                </div>
            </div>
        </>
    )
}