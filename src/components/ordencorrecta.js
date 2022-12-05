import React, { useEffect, useState } from "react";
import huevoestrellado from "../assets/images/Huevo-estrellado.png";
import jugonaranja from "../assets/images/Jugo-naranja.png";
import aceptar from "../assets/images/sucess.png";
import cancelar from "../assets/images/cancel.png"
import "../css/ordencorrecta.css";


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";


const ConfirmarOrden = () => {

  //UseState para almacenar la lista generada
  const [items, setItems] = useState([]);

  //Metodo para obtener la lista de ordenes
  useEffect(() => {
    var ordenesListStorage = localStorage.getItem('ordenesList');
    var ordenesList = [];
    ordenesList = JSON.parse(ordenesListStorage);
    setItems(ordenesList)
  }, []);


  return (
    <React.Fragment>
      <h1 className="titulo-orden">¿Es correcto?</h1>
      <Container display="grid" placecontent="center">
        <Box className="caja" borderRadius={12} >
          <Grid container>
            {items.map((item) => (
              <React.Fragment>
                <Grid container className="margenes">
                  <img className="img-redonda" src={item.imgPlatillo} width={"80%"} /><h1 className="platillos">{item.platillo}</h1>
                </Grid>
                <Grid container className="margenes">
                  <img className="img-redonda" src={item.imgBebida} width={"80%"} /><h1 className="platillos">{item.bebida}</h1>
                </Grid>
                <p>{item.observacion}</p>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container >
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} marginTop="2%">
          <Button size="large" borderRadius={12} type="button"><Link to="/Total" style={{ textDecoration: 'none' }}><img className="img-redonda" src={aceptar} /></Link></Button>
          <Button size="large" borderRadius={12} type="button"><img className="img-redonda" src={cancelar} /></Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default ConfirmarOrden;