import "../../assets/img/Section2.png";
import Paragraph from "../atoms/Paragraph";
import Title2 from "../atoms/Title2";
import ImgSection2 from "../../assets/img/section2.png"
import "../../assets/styles/Section2.css";

function Section2() {
    return (
    <>
     <h1 data-aos="fade-up" className="tituloCards">Tips</h1>
     <section id="about" className="contenedorSection2 about">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="row gx-0">
                    <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                        <img src={ImgSection2} className="img-fluid imagencitaSec2" alt=""/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="containerText">
                        <Paragraph>
                                 <ul>
                                    <li type="circle">Cada paquete adquiere un costo diferente según el número de invitados.</li>
                                    <li type="circle">Se puede personalizar el paquete una vez realizado la cotización previa con el dueño del inmueble.</li>
                                    <li type="circle">Cada paquete adquiere un costo diferente según el número de invitados.</li>
                                    <li type="circle">El día a realizar el evento puede variar el costo.</li>
                                </ul>
                        </Paragraph>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}
export default Section2