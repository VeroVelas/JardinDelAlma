import { useReactToPrint } from "react-to-print";
import { useEffect, useState, useRef } from "react";
import Clientes from '../components/contenedor/Clientes';
import Data from "../components/atoms/Data";
import Navbar from "../components/moleculas/Navbar";
import Title2 from "../components/atoms/Title2";
import Swal from 'sweetalert2'
import axios from "axios";
import '../assets/styles/MostrarDatos.css';


function MostrarDatos() { 
    const componentPDF = useRef();
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/cliente/getAll',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
        };
        axios.request(config)
        .then(reponse=>{
            console.log(reponse.data)
            setDatos(reponse.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint:() => Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'PDF Guardado',
            showConfirmButton: false,
            timer: 1500
          })
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
                                <th><div className="posisionBtn">
                    <button  onClick={generatePDF}>PDF</button>
                    </div></th>
                            </tr><br/>
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
                    </table><br/>
                </div>
            </div>
        </>
    );
}

export default MostrarDatos;