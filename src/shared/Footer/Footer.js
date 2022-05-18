import "./Footer.css"
import EnolaHolmes from "../../assets/images/EnolaHolmes.png"

import Poster from "./Poster"


export default function Footer(){
    return <>
        <div className="Footer">
            <div className="movie">
                <Poster src={EnolaHolmes} />      
            </div>
            <p>Enola Holmes</p>
        </div>
    </>
}