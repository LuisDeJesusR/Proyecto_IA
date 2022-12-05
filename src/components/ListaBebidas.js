import React from "react";
import { ItemMenu } from "./ItemMenu";
import ConsultaMenu from "./ConsultaMenu";
import cancelar from '../assets/images/cancelar.png';

import "../css/vistasBD.css"

import { Link } from "react-router-dom";

export const ListaBebidas = () => {
  const bebidas = ConsultaMenu("bebidas");

  //Metodo para guardar la bebida y su imagen en el LocalStorage
  function saveBebida(bebida, imagen) {
    localStorage.setItem("Bebida", bebida)
    localStorage.setItem("imgBebida", imagen)
  }

  return (
    <>
      <div className="content-items">
        <Link to="/Meseros" style={{ textDecoration: 'none' }}><img className="img-cancelar" src={cancelar} /></Link>
        <h1>Selecciona una bebida</h1>
        <ul className="lista-items">
            {bebidas.map((bebida) => (
              <li><Link onClick={() => saveBebida(bebida.Nombre, bebida.Foto)} to="/Frutas" style={{ textDecoration: 'none' }}><ItemMenu item={bebida} /></Link></li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ListaBebidas;