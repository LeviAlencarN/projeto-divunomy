import React from "react";
import { Link } from "react-router-dom";
import { GiExplodingPlanet } from "react-icons/gi"
import Typical from "react-typical";
import Navegation from "../components/Nav";

const Home= () => {

    return (

        <>
            <div className="Nav">
                <Navegation/>
            </div>

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
        
        </>
    

    )
}

export default Home;