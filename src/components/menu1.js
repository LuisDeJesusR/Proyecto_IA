import React from "react";
import cocinero from "../assets/images/Cocinero.jpg";
import mesero from "../assets/images/Mesero.jpg";
import maestra from "../assets/images/Maestra.jpg";
import "../css/menu1.css";

import { Grid } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
}));

const MenuUsuario = () => {


  return (
    <React.Fragment>
      <div className="Contenedor">
        <div className="Item">
        <img className="boton_cocina" src={cocinero} onClick="" /><h3 className="cocina">COCINA</h3>
        </div>
        <div className="Item">
        <Link to="/Meseros" style={{ textDecoration: 'none' }}><img className="boton_mesero" src={mesero} onClick="" /><h3 className="mesero">MESERO</h3></Link>
        </div>
        <div className="Item">
        <img className="boton_maestra" src={maestra} onClick="" /><h3 className="maestra">MAESTRA</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuUsuario;