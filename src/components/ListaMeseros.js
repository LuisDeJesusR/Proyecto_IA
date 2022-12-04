import React from "react";
import { TarjetaMesero } from "./TarjetaMesero";
import ConsultaMeseros from "./ConsultaMeseros";

import "../css/vistasBD.css"

import { Link } from "react-router-dom";

export const ListaMeseros = () => {
  const meseros = ConsultaMeseros();

  return (
    <>
      <div>
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
