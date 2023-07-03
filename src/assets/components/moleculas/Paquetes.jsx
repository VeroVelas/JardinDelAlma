import "../../styles/Paquete.css";
import logoCard from "../../img/logo.svg"

function Paquetes() {
    return ( 
        <>
        
<section id="pricing" class="pricing">
<div class="container aos-init aos-animate" data-aos="fade-up">
  <div class="row gy-4 aos-init aos-animate" data-aos="fade-left">
    <div class="col-lg-3 col-md-6 aos-init text-center justify-content-center aos-animate" data-aos="zoom-in" data-aos-delay="100">
      <div class="box">
        <h3>Paquete 1</h3>
        <div class="price"><sup>$</sup>4,000</div>
        <img src={logoCard} class="imagenLogo img-fluid" alt=""/>
        <center><ul className="textPaquete">
            <lo class="textPaquete">Limite máximo de personas por evento 120.</lo>
            <lo>Limite mínimo de personas por evento 60.</lo>
            <lo>El precio aplica solo de lunes a miercoles.</lo>
            <lo>Preguntar sobre los servicios.</lo>
        </ul></center>
    </div>
</div>

    <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
      <div class="box">
        <h3>Paquete 2</h3>
        <div class="price"><sup>$</sup>5,500</div>
        <img src="assets/img/pricing-starter.png" class="img-fluid" alt=""/>
        <ul>
            <lo>Limite máximo de personas por evento 120.</lo>
            <lo>Limite mínimo de personas por evento 60.</lo>
            <lo>El precio aplica solo de viernes a sabado.</lo>
            <lo>Preguntar sobre los servicios.</lo>
        </ul>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
      <div class="box">
        <h3 >Paquete 3</h3>
        <div class="price"><sup>$</sup>4,500</div>
        <img src="assets/img/pricing-business.png" class="img-fluid" alt=""/>
        <ul>
            <lo>Limite máximo de personas por evento 120.</lo>
            <lo>Limite mínimo de personas por evento 60.</lo>
            <lo>El precio aplica solo de jueves a domingo.</lo>
            <lo>El precio aplica solo de jueves a domingo.</lo>
        </ul>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
      <div class="box">
        <h3>Paquete por persona</h3>
        <div class="price"><sup>$</sup>350</div>
        <img src="assets/img/pricing-ultimate.png" class="img-fluid" alt=""/>
        <ul>
            <lo>Limite máximo de personas por evento 120.</lo>
            <lo>Limite mínimo de personas por evento 60.</lo>
            <lo>Cuenta con todos los servicios.</lo>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>
        </>
     );
}

export default Paquetes;