import "../../styles/Hero.css"
function Hero() {
    return ( 
        <>
        <section id="hero" className="heroSection hero d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up" className="tituloHero">Crea momentos inolvidables</h1>
                        <h4 data-aos="fade-up" data-aos-delay="200" className="textoHero">Alquila el lugar perfecto para tu próximo evento con nosotros.</h4>
                        <div data-aos="fade-up" data-aos-delay="600" className="aos-init aos-animate"></div>
                    </div>
                    <div className="col-lg-6 hero-img aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200"></div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Hero;