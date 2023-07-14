import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/InicioSesion.css";
import Navbar from "../components/moleculas/Navbar";

function InicioSesion() {
    const form=useRef();
    const [state, setState]=useState()
    const navigate=useNavigate()
    const iniciar=()=>{
        const newForm=new FormData(form.current)
        if (newForm.get('Nombre')!='Jesus'){
            setState('Nombre incorrecto')
        }else if(newForm.get('contra')!='1234'){
            setState('Contraseña incorrecta')
        }else
            navigate('/datos')
    }
    return ( 
        <>
        <Navbar/>
        <section class="">
            <div class="px-4 py-5 px-md-5 text-center text-lg-start">
                <div class="container">
                    <div class="row gx-lg-5 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                        <center><h1 data-aos="fade-up" className="tituloHero">Crea momentos inolvidables</h1><br />
                            <span class="subTextoInicioSesion">Se parte de las mejores experiencias con nosotros.</span>
                            <p>
                                El iniciar sesión es importante para poder mejorar el seguimiento de tus siguientes eventos al igual que mejorar de tu experiencia.
                            </p></center>
                        </div>
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="card">
                                <div class="card-body py-5 px-md-5">
                                    <center><h1>Iniciar Ya!</h1></center><br/>
                                    <form ref={form}>
                                        <div class="form-outline mb-4">
                                            <input type="text" name="Nombre" placeholder="Nombre Completo" class="form-control text-center p-2"/>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input type="password" name="contra" placeholder="Contraseña" class="form-control text-center p-2" />
                                        </div>
                                        <label>{state}</label>
                                        <center><button type="button" onClick={iniciar} class="btn btn-block mb-4">Iniciar</button></center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default InicioSesion;