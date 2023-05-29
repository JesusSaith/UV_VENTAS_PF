
import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

import React, { Component } from "react";

import AddUvVentas from "./components/add-uvvenetas.component";
import UvVentasList from "./components/uvvenetas-list.component";
import Home from "./components/home.component";

import ImageGallery from "./components/images.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            Home
          </a>
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          
          <Routes>
            <Route exact path="/" element={<UvVentasList/>} />
            <Route exact path="add" element={<AddUvVentas/>} />
            <Route exact path="home" element={<Home/>} />
          </Routes>

          
        

      <div className="App">
      <h1>Productos</h1>
      <ImageGallery />
    </div>




        </div>
      </div>


    );


  }
}

export default App;
