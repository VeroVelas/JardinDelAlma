import Navbar from "../components/moleculas/Navbar";
import { useRef, useState } from "react";
import "../assets/styles/Formulario.css";

function Formulario() {
    const form1 = useRef();
    const [state, setState]=useState([]);
    const [precio, setPrecio]=useState([]);
    const chandlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData (form1.current);
        const hoy= new Date();
        const fecha= newForm.get('fecha').split('-');
        const soloLetras=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        const letrasNumeros=/^[A-Za-z0-9\s]+$/;
        if (newForm.get('nombre')==''){
            setState('El campo "Nombre Completo" no puede estar vacio');
        }else if(newForm.get('nombre').search(soloLetras)){
            setState('El campo "Nombre Completo" solo puede llevar letras')
        }else if (newForm.get('telefono')==''){
            setState('El campo "Número Telefónico" no puede estar vacio')
        }else if (newForm.get('telefono').length<10||newForm.get('telefono').length>10){
            setState('El "Número Telefónico" tiene que tener 10 numeros');
        }else if (newForm.get('invitados')==''){
            setState('El campo "Número De Invitados" no puede estar vacio')
        }else if (newForm.get('fecha')==''){
            setState('El campo "Fecha Del Evento" no puede estar vacio')
        }else if (newForm.get('evento')==''){
            setState('El campo "Tipo De Evento" no puede estar vacio')
        }else if(newForm.get('evento').search(letrasNumeros)){
            setState('El campo "Tipo De Evento" solo puede llevar letras y numeros')
        }else switch(parseInt(newForm.get('tipo'))){
            case 0:
                if (newForm.get('invitados')<29||newForm.get('invitados')>121){
                    setState('El numero de invitados tiene que estar en el rango de 30 a 120 personas')
                    setPrecio('')
                }else if (fecha[0]<=hoy.getFullYear()){
                    if (fecha[1]<=hoy.getMonth()+1){
                        if (fecha[2]<=hoy.getDate()){
                            setState('La fecha del evento no es valida');
                            setPrecio('')
                        }else {
                            setState('')
                            calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                        }
                    }else {
                        setState('')
                        calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                    }
                }else {
                    setState('')
                    calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                }
                break;
            case 1:
                if (newForm.get('invitados')<29||newForm.get('invitados')>121){
                    setState('El numero de invitados tiene que estar en el rango de 30 a 120 personas')
                    setPrecio('')
                }else if (fecha[0]<=hoy.getFullYear()){
                    if (fecha[1]<=hoy.getMonth()+1){
                        if (fecha[2]<=hoy.getDate()){
                            setState('La fecha del evento no es valida');
                            setPrecio('')
                        }else {
                            setState('')
                            calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                        }
                    }else {
                        setState('')
                        calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                    }
                }else {
                    setState('')
                    calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                }
                break;
            case 2:
                if (newForm.get('invitados')<29||newForm.get('invitados')>121){
                    setState('El numero de invitados tiene que estar en el rango de 30 a 120 personas')
                    setPrecio('')
                }else if (fecha[0]<=hoy.getFullYear()){
                    if (fecha[1]<=hoy.getMonth()+1){
                        if (fecha[2]<=hoy.getDate()){
                            setState('La fecha del evento no es valida');
                            setPrecio('')
                        }else {
                            setState('')
                            calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                        }
                    }else {
                        setState('')
                        calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                    }
                }else {
                    setState('')
                    calcularPrecio(newForm.get('invitados'), newForm.get('tipo'))
                }
                break;
            case 3:
                if (newForm.get('invitados')<59||newForm.get('invitados')>121){
                    setState('El numero de invitados tiene que estar en el rango de 60 a 120 personas')
                    setPrecio('')
                }else if (fecha[0]<=hoy.getFullYear()){
                    if (fecha[1]<=hoy.getMonth()+1){
                        if (fecha[2]<=hoy.getDate()){
                            setState('La fecha del evento no es valida');
                            setPrecio('')
                        }else {
                            setState('')
                            setPrecio(newForm.get('invitados')*315)
                        }
                    }else {
                        setState('')
                        setPrecio(newForm.get('invitados')*315)
                    }
                }else {
                    setState('')
                    setPrecio(newForm.get('invitados')*315)
                }
                break;
        }

    }
    const calcularPrecio=(nInvitados, nPaquete)=>{
        const array=[4000,5500,4500]
        do{
            nInvitados++;
        }while(nInvitados%10!=0)
        nInvitados=nInvitados/10;
        setPrecio((nInvitados*350)+array[nPaquete]);
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
                                            <option value="0">Paquete 1</option>
                                            <option value="1">Paquete 2</option>
                                            <option value="2">Paquete 3</option>
                                            <option value="3">Paquete 4</option>
                                        </select>
                                    </div>
                                    <label className="alert">{state}</label><br/>
                                    <button type="button" onClick={chandlerClick} className="btn">Reservar</button>
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