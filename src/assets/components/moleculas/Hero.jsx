import "../../styles/Hero.css"
function Hero() {
    return ( 
        <>
        <section id="hero" class="heroSection hero d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up" class="tituloHero">Crea momentos inolvidables</h1>
                        <h4 data-aos="fade-up" data-aos-delay="200" class="textoHero">Alquila el lugar perfecto para tu próximo evento con nosotros.</h4>
                        <div data-aos="fade-up" data-aos-delay="600" class="aos-init aos-animate"></div>
                    </div>
                    <div class="col-lg-6 hero-img aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Hero;