import imagenSectio1 from "../../assets/img/imagenSection1.png"
import imagenSectio11 from "../../assets/img/imagenSection11.png"
import "../../assets/styles/Section1.css"

function Section1() {
    return ( 
        <>
        <section id="about" className="about">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="row gx-0">
                    <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div className="contenedorTextoSection1 content">
                            <h3 className="TituloSection2">¡¡¡Créalo!!!</h3>
                            <h2 className="textoSection2">Haz de tu evento algo extraordinario: Descubre nuestras opciones de renta y convierte cualquier espacio en un escenario mágico.</h2>
                            <div className="text-center text-lg-start"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                        <img src={imagenSectio1} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section id="about" className="about">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="row gx-0">
                    <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                        <img src={imagenSectio11} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div className="contenedorTextoSection1 content">
                            <h3 className="Titulo2Section2">¡¡¡Tus experiencias!!!</h3>
                            <h2 className="texto2Section2">Espacios que se adaptan a tus necesidades: Encuentra el lugar perfecto para tu boda, cumpleaños, conferencia o cualquier ocasión especial.</h2>
                            <div className="text-center text-lg-start"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Section1;