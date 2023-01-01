import React from "react";
import { GiExplodingPlanet } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navegation(){
    return(
        <div>
            <nav>
                <ul>
                    
                    <span>
                        <GiExplodingPlanet/>
                        Divunomy
                    </span>

                    <li className="home">
                        <Link to= '/'>Inicio</Link>
                    </li>

                    <li>
                        <Link to= '/Buracos Negros'>Buracos Negros</Link>
                    </li>

                    <li>
                        <Link to= '/Curiosidades'>Curiosidades</Link>
                    </li>

                    <li>
                        <Link to= '/Sistema Solar'>Sistema Solar</Link>
                    </li>
                    
                    <li>
                        <Link to= '/Sobre'>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navegation;