import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function ConsultaMenu(coleccion) {
  const [menu, setMenu] = useState([]);

  const obtenerMenu = async () => {
    const menu = await getDocs(query(collection(db, coleccion), orderBy("numero", "asc")));
    const prevMenu = [];

    menu.forEach((item) => {
      prevMenu.push({
        IdItem: item.id,
        Numero: item.data().numero,
        Nombre: item.data().nombre,
        Foto: item.data().imagen,
      });
    });
    setMenu(prevMenu);
  };

  useEffect(() => {
    obtenerMenu();
  }, []);

  return menu;
}

export default ConsultaMenu;