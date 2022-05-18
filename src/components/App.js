import "../assets/styles/reset.css"
import "../assets/styles/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../shared/Header/Header";
import MovieSelection from "./MovieSelection/MovieSelection";
import Movie from "./Movie/Movie";
import Session from "./Session/Session";
import Sucess from "./Sucess/Sucess";

export default function App(){
    return (
    <>
        <BrowserRouter>
            <Header />
            <Routes >
                <Route path="/" element={<MovieSelection/>} />
                <Route path="/filme/:idMovie" element={<Movie />} />
                <Route path="/sessao/:idSession" element={<Session />} />
                <Route path="/sucess" element={<Sucess />} />
            </Routes>
        </BrowserRouter>
        
    </>
    )
}