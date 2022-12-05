import React, {useState , useEffect} from "react";
import "../css/total.css";

const Total = () => {
    //UseState para almacenar la lista generada
    const [total, seTotal] = useState(0);

    //Metodo para obtener el número de clientes
    useEffect(() => {
        var noCLientesStorage = localStorage.getItem('NoClientes');
        //setNoClientes(noCLientesStorage)
        seTotal(120*noCLientesStorage);
    }, []);


    return (
        <body className="body-total">
            <div>
                <h1 className="Encabezado-Total">Tienes que cobrar</h1>
                <h1 className="Precio-Total">${total}</h1>

                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </body>
    );
};

export default Total;  