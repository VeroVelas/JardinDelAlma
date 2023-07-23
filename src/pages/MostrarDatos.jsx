import { useState } from "react";
import Navbar from "../components/moleculas/Navbar";
import Title2 from "../components/atoms/Title2";
import Clientes from '../components/contenedor/Clientes';
import '../assets/styles/MostrarDatos.css';

function MostrarDatos() {
    const [datos, setDatos] = useState([]);
    
    const obtenerCliente = () => {
        const clientesHTML = Clientes.map((cliente, index) => (
            <tr key={index}>
                <th>{cliente.nombre}</th>
                <th>{cliente.telefono}</th>
                <th>{cliente.invitados}</th>
                <th>{cliente.fecha}</th>
                <th>{cliente.evento}</th>
                <th>{cliente.paquete}</th>
            </tr>
        ));
        setDatos(clientesHTML);
    }

    return (
        <>
            <Navbar/><br/><br/>
            <Title2>Reservaciones</Title2>
            <br/><br/><br/><br/>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><center><button className="botonMostrar btn btn-success" type="button" onClick={obtenerCliente}>Mostrar</button></center></th>
                            <th><h3>Nombre</h3></th>
                            <th><h3>Teléfono</h3></th>
                            <th><h3>Invitados</h3></th>
                            <th><h3>Fecha</h3></th>
                            <th><h3>Evento</h3></th>
                            <th><h3>Paquete</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MostrarDatos;