//Importaciones de react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Importación de comoponentes
import Mesas from "./components/mesas";
import Clientes from "./components/numeroClientes";
import Total from "./components/total";
import Menu from "./components/menu1";
import ListaMeseros from "./components/ListaMeseros";
import ListaPlatillos from "./components/ListaPlatillos";
import ListaBebidas from "./components/ListaBebidas";
import ConfirmarOrden from "./components/ordencorrecta"

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/Clientes" element={<Clientes/>} />
            <Route path="/Total" element={<Total/>} />
            <Route path="/Meseros" element={<ListaMeseros/>} />
            <Route path="/Mesas" element={<Mesas/>} />
            <Route path="/Platillos" element={<ListaPlatillos/>} />
            <Route path="/Bebidas" element={<ListaBebidas/>} />
            <Route path="/ConfirmarOrden" element={<ConfirmarOrden/>} />
          </Routes>
    </Router>
  );
}

export default App;
