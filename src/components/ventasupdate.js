import React from "react";
import ImageGallery from "./images.component";
import "../styles/App.css";

const Ventas = (props) => {


  return (
      <div className="image-gallery">
        <h1>Galería de imágenes</h1>
        <ImageGallery  email={props.email}/>
      </div>
    
  );
};

export default Ventas;