import React from "react";
import { ItemMenu } from "./ItemMenu";
import ConsultaMenu from "./ConsultaMenu";

import "../css/vistasBD.css"

import { Link } from "react-router-dom";

export const ListaBebidas = () => {
  const bebidas = ConsultaMenu("bebidas");

  return (
    <>
      <div>
        <ul className="lista-items">
            {bebidas.map((bebida) => (
              <li><Link to="/ConfirmarOrden" style={{ textDecoration: 'none' }}><ItemMenu item={bebida} /></Link></li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListaBebidas;