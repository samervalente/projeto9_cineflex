import { useNavigate } from "react-router-dom"

import "./BackButton.css"


export default function BackButton({route}){
    const navigate = useNavigate()
    function Back(){
        navigate(route)
    }

    return (
        <>
            <ion-icon class="BackButton" name="arrow-back-circle" onClick={Back} alt="Voltar"></ion-icon>
        </>
    )
}