import "../../assets/styles/Paquete.css";
import logoCard from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

function Paquetes() {
    return ( 
        <>
        <h1 id="paquetes" data-aos="fade-up" className="tituloCards">Paquetes</h1>
        <section id="pricing" className="pricing">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row gy-4 aos-init aos-animate" data-aos="fade-left">
              <div className="col-lg-3 col-md-6 aos-init text-center justify-content-center aos-animate" data-aos="zoom-in" data-aos-delay="100"></div>
                <div className="col-lg-3 col-md-6 aos-init aos-animate text-center justify-content-center contenedorCard" data-aos="zoom-in" data-aos-delay="200">
                  <div className="box">
                  <br/><h3 className="tituloPaqueteTop">Paquete Salón Inmobiliario</h3>
                    <div className="price"><sup></sup></div>
                    <img src={logoCard} className="imagenLogo img-fluid" alt=""/>
                    <ul className="textPaquete">
                        <lo>Preguntar sobre los servicios.</lo><br/>
                        <lo>Limite máximo de personas por evento <b>120.</b></lo><br/>
                        <lo>Para menos de <b>50</b> personas comunicarte con el dueño.</lo><br/>
                        {/*<lo>El precio aplica solo de <b>viernes</b> y <b>sábado</b>.</lo><br/>*/}
                    </ul>
                    <Link to={'/formulario'}><button className="btn-buyTop">Reservar</button></Link>
                  </div>
                </div>
              <div className="col-lg-3 col-md-6 aos-init aos-animate text-center justify-content-center contenedorCard" data-aos="zoom-in" data-aos-delay="400">
                <div className="box">
                <br/><h3 className="tituloPaquete">Paquete Full Service</h3>
                  <div className="price"><sup>$</sup>315</div>
                  <img src={logoCard} className="imagenLogo img-fluid" alt=""/>
                  <ul className="textPaquete">
                      <lo>(Todo Incluido)</lo><br/>
                      <lo>Limite máximo de personas por evento <b>120.</b></lo><br/>
                      <lo>Limite mínimo de personas por evento <b>60.</b></lo><br/>
                  </ul>
                  <Link to={'/formulario'}><button className="btn-buy">Reservar</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
     );
}

export default Paquetes;