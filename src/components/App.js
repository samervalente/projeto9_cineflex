import "../assets/styles/reset.css"
import "../assets/styles/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react"

import Header from "../shared/Header/Header";
import MovieSelection from "./MovieSelection/MovieSelection";
import Movie from "./Movie/Movie";
import Session from "./Session/Session";
import Sucess from "./Sucess/Sucess";

export default function App(){
    const [infos, setInfos] = useState({
        nameFilm:"",
        PosterUrl:"",
        seats:[],
        userCPF:"",
        userName:"",
        date:"",
        weekday:"",
        horary:""
    }) 
    const[movieID, setMovieID] = useState("")
    const[sessionID, setSessionID] = useState("")

    return (
    <>
        <BrowserRouter>
            <Header />
            <Routes >
                <Route path="/" element={<MovieSelection />} />     
                <Route path="/filme/:idMovie" element={<Movie infos={infos} setMovieID={setMovieID} />} />
                <Route path="/sessao/:idSession" element={<Session infos={infos} setInfos={setInfos} movieID={movieID} setSessionID={setSessionID} />} />
                <Route path="/sucesso" element={<Sucess infos={infos} setInfos={setInfos} sessionID={sessionID} />} />
            </Routes>
        </BrowserRouter>
        
    </>
    )
}