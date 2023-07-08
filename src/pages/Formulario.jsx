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
        </>
     );
}

export default Formulario;