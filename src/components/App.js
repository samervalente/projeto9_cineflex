import "../assets/styles/reset.css"
import "../assets/styles/style.css"

import Header from "../shared/Header/Header";
import MovieSelection from "./MovieSelection/MovieSelection";
import Movie from "./Movie/Movie";
import Footer from "../shared/Footer/Footer"
import Session from "./Session/Session";
import Sucess from "./Sucess/Sucess";


export default function App(){
    return (
    <>
        <Header />
        <MovieSelection />
        <Movie />
        <Session />
        <Sucess />
        <Footer />
        
    </>
    )
}