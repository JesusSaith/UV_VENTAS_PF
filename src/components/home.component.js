import React from "react";
import "../styles/home.css";
import Logo from "../images/descarga.png";


function home (){
    return(
        <div className="home-container">
            <div className="home-image">
                <img src= {Logo} alt="home" />
        </div>

        <div className="Profile-ventas">
            <h1 className="Titulo"> UV Ventas </h1>

        </div>
            </div> 
    );
}

export default home;