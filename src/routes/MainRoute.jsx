import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import Curiosidades from "./Curiosidades";
import BlkHole from "./BlackHole";
import SiSolar from "./SistemaSolar";


const Rota= () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Home/>} path = '/' exact/>
                <Route element = {< BlkHole/>} path = '/Buracos Negros'/>
                <Route element = {<Curiosidades/>} path = '/Curiosidades'/>
                <Route element = {<SiSolar/>} path = '/Sistema Solar'/>
                <Route element = {<Sobre/>} path = '/Sobre'/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Rota;