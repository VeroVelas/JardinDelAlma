import Cards from "../components/moleculas/Cards";
import Collage from "../components/moleculas/Collage";
import Footer from "../components/moleculas/Footer";
import Hero from "../components/moleculas/Hero";
import Navbar from "../components/moleculas/Navbar";
import Paquetes from "../components/moleculas/Paquetes";
import Section1 from "../components/moleculas/Section1";
import Imagen from "../components/moleculas/Imagen";
import Section2 from "../components/moleculas/Section2";
import Ubicacion from "../components/moleculas/Ubicacion";


function LandingPage() {
    return ( 
      <>
        <Navbar/>
        <Hero/>
        <Section1/>
        <Imagen/>
        <Collage/>
        <Cards/>
        <Paquetes/> 
        <Section2/>
        <Ubicacion/>
        <Footer/>
      </>
     );
  }
  
  export default LandingPage;