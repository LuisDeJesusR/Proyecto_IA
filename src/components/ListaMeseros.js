import React from "react";
import { TarjetaMesero } from "./TarjetaMesero";
import ConsultaMeseros from "./ConsultaMeseros";
import regresar from '../assets/images/regresar.png';

import "../css/vistasBD.css"

import { Link } from "react-router-dom";

export const ListaMeseros = () => {
  const meseros = ConsultaMeseros();

  return (
    <>
      <div className="content-items">
      <Link to="/" style={{ textDecoration: 'none' }}><img className="img-cancelar" src={regresar} /></Link>
        <h1>Selecciona tu nombre</h1>
        <ul className="lista-items">
            {meseros.map((mesero) => (
              <li><Link to="/Mesas" style={{ textDecoration: 'none' }}><li><TarjetaMesero mesero={mesero} /></li></Link></li>
              
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListaMeseros;
