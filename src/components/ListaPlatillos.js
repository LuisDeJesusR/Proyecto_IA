import React from "react";
import { ItemMenu } from "./ItemMenu";
import ConsultaMenu from "./ConsultaMenu";

import "../css/vistasBD.css"

import { Link } from "react-router-dom";

export const ListaPlatillos = () => {
  const platillos = ConsultaMenu("platillos");

  return (
    <>
      <div>
        <ul className="lista-items">
            {platillos.map((platillo) => (   
              <li><Link to="/Bebidas" style={{ textDecoration: 'none' }}><ItemMenu item={platillo} /></Link></li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListaPlatillos;