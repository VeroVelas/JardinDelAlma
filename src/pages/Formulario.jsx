import Navbar from "../components/moleculas/Navbar";
import { useRef, useState } from "react";
import validarDatos from "./validarDatos";
import definirPaquete from "./definirPaquete";
import Clientes from "../components/contenedor/Clientes";
import "../assets/styles/Formulario.css";

function Formulario() {
    const form1 = useRef();
    const [state, setState]=useState([]);
    const [precio, setPrecio]=useState([]);
    const chandlerClick = () => {
        const newForm = new FormData (form1.current);
        const hoy= new Date();
        const fecha= newForm.get('fecha').split('-');
        const soloLetras=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        const letrasNumeros=/^[A-Za-z0-9\s]+$/;
        const correcto= validarDatos(newForm.get('nombre'),newForm, soloLetras, letrasNumeros, setState);
        if (correcto){
            definirPaquete(newForm, hoy, fecha, setState, setPrecio);
        }
    }
    const registrarDatos=(state)=>{
        const newForm = new FormData (form1.current)
        const cliente={
            nombre:newForm.get('nombre'),
            telefono:newForm.get('telefono'),
            invitados:newForm.get('invitados'),
            fecha:newForm.get('fecha'),
            evento:newForm.get('evento'),
            paquete:`paquete ${newForm.get('tipo')}`
        }
        if (document.getElementById('estado').value==undefined){
            Clientes[Clientes.length]=cliente;
            alert(JSON.stringify(Clientes));
        }
    }

    return ( 
        <>
        <Navbar/>
        <div className="FondoVerde">
    <center><div className="FondoBlancoForm">
                <div className="tamanoCardForm">
                <br/><h3 className="TituloFormulario">Formulario</h3>
                    <p className="texto1Formualrio">Ingrese sus datos personales de tal manera que el dueño del salón podrá comunicarse con usted y personalizar su evento.</p>
                        <div className="">
                            <form ref={form1} id="formulario">
                                <center>
                                    <div className="">
                                        <input type="text" onChange={chandlerClick} name="nombre" placeholder="Nombre Completo" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="number" onChange={chandlerClick} name="telefono" placeholder="Número Telefónico" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="number" onChange={chandlerClick} name="invitados" placeholder="Número De Invitados" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="date" onChange={chandlerClick} name="fecha" placeholder="Fecha Del Evento" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="text" onChange={chandlerClick} name="evento" placeholder="Tipo De Evento" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <select className="tipoOperación" onChange={chandlerClick} name="tipo">
                                            <option value="1">Paquete 1</option>
                                            <option value="2">Paquete 2</option>
                                            <option value="3">Paquete 3</option>
                                            <option value="4">Paquete 4</option>
                                        </select>
                                    </div>
                                    <label className="alert" id="estado">{state}</label><br/>
                                    <button type="button" onClick={registrarDatos} className="btn">Reservar</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div></center>
            </div>
            <div class="card-group">
                <div class="card">
                    <div class="CajaInformacion card-body">
                        <h5 class="tituloNegritas card-title text-center">Nota</h5>
                        <p class="textoJustificado card-text">
                            El paquete por persona mínimo deben albergar 60 personas.
                            Al igual que el precio será un estimado en invitados, para ello ponerse en contacto en el dueño.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="CajaInformacion card-body">
                        <h5 class="tituloNegritas card-title text-center">Precio estimado de invitados</h5>
                        <h3>$ <h3>{precio}</h3></h3>
                    </div>
                </div>
                <div class="card">
                    <div class="CajaInformacion card-body">
                        <h5 class="tituloNegritas card-title text-center">Nota</h5>
                        <p class="textoJustificado card-text text-justify">En el paquete 1,2 y 3 cada invitado tiene un costo de $315, ya que se verá reflejado el precio estimado en cuantos invitados aproximados designe en su paquete + el precio base del salón (Paquete de su elección).</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Formulario;