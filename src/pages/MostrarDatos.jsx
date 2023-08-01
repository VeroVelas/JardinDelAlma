import { useReactToPrint } from "react-to-print";
import { useEffect, useState, useRef } from "react";
import Clientes from '../components/contenedor/Clientes';
import Data from "../components/atoms/Data";
import Navbar from "../components/moleculas/Navbar";
import Title2 from "../components/atoms/Title2";
import '../assets/styles/MostrarDatos.css';

function MostrarDatos() { 
    const componentPDF = useRef();
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        setDatos(Clientes);
    },[])

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint:()=>alert("Datos guardados en el PDF")
    });
    return (
        <>
            <Navbar/><br/><br/>
            <Title2>Reservaciones</Title2>
            <br/><br/><br/><br/>
            <div>
                <div ref={componentPDF} style={{width:'100%'}}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><h3>Nombre</h3></th>
                            <th><h3>Teléfono</h3></th>
                            <th><h3>Invitados</h3></th>
                            <th><h3>Fecha</h3></th>
                            <th><h3>Evento</h3></th>
                            <th><h3>Paquete</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.map((cliente)=>(
                                <>
                                    <Data
                                        nombre={cliente.nombre}
                                        invitados={cliente.invitados}
                                        telefono={cliente.telefono}
                                        fecha={cliente.fecha}
                                        evento={cliente.evento}
                                        paquete={cliente.paquete}
                                    />
                                </>
                            ))
                        }
                    </tbody>
                    <div>
                        <button className=" btn btn-success" onClick={generatePDF}>PDF</button>
                    </div>
                </table>
                </div>
            </div>
        </>
    );
}

export default MostrarDatos;