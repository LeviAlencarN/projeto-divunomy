import React from "react";
import { Link } from "react-router-dom";
import { GiExplodingPlanet } from "react-icons/gi"
import Typical from "react-typical";

const Home= () => {

    return (

    <div className="Nav">
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

        <main>
            <div className="text">
                <Typical
                    steps={[
                        'Descubra',
                         1000,
                        'Descubra as maravilhas do universo!',
                        1000,
                        'Prepare-se',
                        1000,
                        'Ligando propulsores...'
                    ]}
                    loop={false}
                    wrapper="T"
                />

                <p>Explore o inexplorável e junte-se a outros amantes da astronomia! aqui você verá o quão grandioso
                    é o nosso universo, embarcando numa espaçonave que viajará desde o nosso sistema solar, até o big bang!
                    Siga-me, e desfrute da beleza estonteante da FRONTEIRA FINAL!
                </p>
                <div className="img">

                </div>
                
            
            </div>
        </main>
    </div>

    )
}

export default Home;