import "./MovieSelection.css"

import DoisMil from "../../assets/images/2067.png"
import EnolaHolmes from "../../assets/images/EnolaHolmes.png"

function Poster(){
    return (
        <>
           <div>
           <div className="movie">
                <img alt="movie" className="cartaz" src={DoisMil} />
            </div>
           </div>
           <div>
           <div className="movie">
                <img className="cartaz" alt="movie" src={EnolaHolmes} />
            </div>
           </div>
           <div className="movie">
                <img className="cartaz" alt="movie" src={EnolaHolmes} />
            </div>
        </>
    )
}


export default function MovieSelection(){
    return (
        <>
            <div className="box">
            <h4>Selecione o filme</h4>
            <div className="movies">
                <Poster />
            </div>
            </div>

        </>

    )
}

