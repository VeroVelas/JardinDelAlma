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
            <Navbar/>
            <Title2>Reservaciones</Title2>
            <button type="button" onClick={obtenerCliente}>mostrar</button>
            <div className="tableR">
                <table>
                    <thead>
                        <tr>
                            <th><h3>Nombre</h3></th>
                            <th><h3>Telefono</h3></th>
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