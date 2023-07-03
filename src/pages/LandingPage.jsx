import Cards from "../components/moleculas/Cards";
import Footer from "../components/moleculas/Footer";
import Hero from "../components/moleculas/Hero";
import Navbar from "../components/moleculas/Navbar";
import Paquetes from "../components/moleculas/Paquetes";
import Section1 from "../components/moleculas/Section1";


function LandingPage() {
    return ( 
      <>
        <Navbar/>
        <Hero/>
        <Section1/>
        <Cards/>
        <Paquetes/> 
        <Footer/>
      </>
     );
  }
  
  export default LandingPage;