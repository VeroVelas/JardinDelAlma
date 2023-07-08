import "../../assets/styles/Paquete.css";
import logoCard from "../../assets/img/logo.svg"

function Paquetes() {
    return ( 
        <>
<h1 data-aos="fade-up" className="tituloCards">Paquetes</h1>
<section id="pricing" className="pricing">
<div className="container aos-init aos-animate" data-aos="fade-up">
  <div className="row gy-4 aos-init aos-animate" data-aos="fade-left">
    <div className="col-lg-3 col-md-6 aos-init text-center justify-content-center aos-animate" data-aos="zoom-in" data-aos-delay="100">
      <div className="box">
        <br/><h3 className="tituloPaquete">Paquete 1</h3>
        <div className="price"><sup>$</sup>4,000</div>
        <img src={logoCard} className="imagenLogo img-fluid" alt=""/>
        <ul className="textPaquete">
            <lo>Limite máximo de personas por evento 120.</lo><br/>
            <lo>Limite mínimo de personas por evento 30.</lo><br/>
            <lo>El precio aplica solo de <b>lunes</b> a <b>miércoles</b>.</lo><br/>
            <lo>Preguntar sobre los servicios.</lo><br/>
        </ul>
        <button className="btn-buy">Reservar</button>
    </div>
</div>

    <div className="col-lg-3 col-md-6 aos-init aos-animate text-center justify-content-center" data-aos="zoom-in" data-aos-delay="200">
      <div className="box">
      <br/><h3 className="tituloPaqueteTop">Paquete 2</h3>
        <div className="price"><sup>$</sup>5,500</div>
        <img src={logoCard} className="imagenLogo img-fluid" alt=""/>
        <ul className="textPaquete">
            <lo>Limite máximo de personas por evento 120.</lo><br/>
            <lo>Limite mínimo de personas por evento 30.</lo><br/>
            <lo>El precio aplica solo de <b>viernes</b> y <b>sábado</b>.</lo><br/>
            <lo>Preguntar sobre los servicios.</lo><br/>
        </ul>
        <button className="btn-buyTop">Reservar</button>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 aos-init aos-animate text-center justify-content-center" data-aos="zoom-in" data-aos-delay="300">
      <div className="box">
      <br/><h3 className="tituloPaquete">Paquete 3</h3>
        <div className="price"><sup>$</sup>4,500</div>
        <img src={logoCard} className="imagenLogo img-fluid" alt=""/>
        <ul className="textPaquete">
            <lo>Limite máximo de personas por evento 120.</lo><br/>
            <lo>Limite mínimo de personas por evento 30.</lo><br/>
            <lo>El precio aplica solo de <b>jueves</b> y <b>domingo</b>.</lo><br/>
            <lo>Preguntar sobre los servicios.</lo><br/>
        </ul>
        <button className="btn-buy">Reservar</button>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 aos-init aos-animate text-center justify-content-center" data-aos="zoom-in" data-aos-delay="400">
      <div className="box">
      <br/><h3 className="tituloPaquete">Paquete por persona</h3>
        <div className="price"><sup>$</sup>350</div>
        <img src={logoCard} className="imagenLogo img-fluid" alt=""/>
        <ul className="textPaquete">
            <lo>Limite máximo de personas por evento 120.</lo><br/>
            <lo>Limite mínimo de personas por evento 60.</lo><br/>
            <lo>Cuenta con todos los servicios.</lo><br/><br/>
        </ul>
        <button className="btn-buy">Reservar</button>
      </div>
    </div>
  </div>
</div>
</section>
        </>
     );
}

export default Paquetes;