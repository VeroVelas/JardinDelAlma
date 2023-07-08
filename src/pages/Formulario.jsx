import Navbar from "../components/moleculas/Navbar";
import "../assets/styles/Formulario.css";

function Formulario() {
    return ( 
        <>
        <Navbar/>
        <div className="FondoVerde">
    <center><div className="FondoBlancoForm">
                <div className="tamanoCardForm">
                <br/><h3 className="TituloFormulario">Formulario</h3>
                    <p className="texto1Formualrio">Ingrese sus datos personales de tal manera que el dueño del salón podrá comunicarse con usted y personalizar su evento.</p>
                        <div className="">
                            <form>
                                <center>
                                    <div className="">
                                        <input type="email" placeholder="Nombre Completo" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="email" placeholder="Número Telefónico" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="email" placeholder="Número De Invitados" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="email" placeholder="Fecha Del Evento" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="email" placeholder="Tipo De Evento" className="inputFormulario "/>
                                    </div>
                                    <div className="">
                                        <input type="email" placeholder="Tipo Del Paquete" className="inputFormulario "/>
                                    </div>
                                    <center><button type="submit" className="btn">Enviar</button></center>		
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
                        <h3>$</h3>
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