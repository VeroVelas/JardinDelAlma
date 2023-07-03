import  "../../assets/styles/Cards.css"
import anillosCard from "../../assets/img/anillos.svg"
import pinataCard from  "../../assets/img/pinata.svg"
import fiestaCard from  "../../assets/img/fiesta.svg"
import personasCard from  "../../assets/img/personas.svg"
import casaCard from  "../../assets/img/casa.svg"
import tratoCard from  "../../assets/img/trato.svg"
function Cards() {
    return ( 
        <>
        <section id="services" class="services">
        <h1 data-aos="fade-up" className="tituloCards">Crea momentos inolvidables</h1>
            <div class="container aos-init aos-animate" data-aos="fade-up">
                <div class="row gy-4">
                    <div class="col-lg-4 col-md-6 aos-init aos-animate text-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="cardFondo service-box">
                            <img className="p-4" src={anillosCard}/>
                            <h3 className="p-1">BODAS</h3>
                            <center><p className="contenedorTexto">El día más especial de nuestras vidas: nuestra boda.</p></center>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 aos-init aos-animate text-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="cardFondo service-box">
                            <img className="p-4" src={pinataCard}/>
                            <h3 className="p-1">FIESTAS INFANTILES</h3>
                            <center><p className="contenedorTexto">Diversión a todo color para los más pequeños.</p></center>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 aos-init aos-animate text-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="cardFondo service-box">
                            <img className="p-4" src={fiestaCard}/>
                            <h3 className="p-1">XV AÑOS</h3>
                            <center><p className="contenedorTexto">Brilla como nunca en tus XV años.</p></center>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 aos-init aos-animate text-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="cardFondo service-box">
                            <img className="p-4" src={personasCard}/>
                            <h3 className="p-1">PERSONAS</h3>
                            <center><p className="contenedorTexto">El salón tiene una capacidad máxima de 120 personas y mínimo 60 por evento.</p></center>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 aos-init aos-animate text-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="cardFondo service-box">
                            <img className="p-4" src={casaCard}/>
                            <h3 className="p-1">PROPIEDAD</h3>
                            <center><p className="contenedorTexto">El espacio perfecto para eventos de tamaño medio.</p></center>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 aos-init aos-animate text-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="cardFondo service-box">
                            <img className="p-4" src={tratoCard}/>
                            <h3 className="p-1">TRATO</h3>
                            <center><p className="contenedorTexto">Tu satisfacción es nuestra prioridad.</p></center>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Cards;