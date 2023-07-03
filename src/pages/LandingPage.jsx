import Cards from "../assets/components/moleculas/Cards";
import Footer from "../assets/components/moleculas/Footer";
import Hero from "../assets/components/moleculas/Hero";
import Navbar from "../assets/components/moleculas/Navbar";
import Section1 from "../assets/components/moleculas/Section1";


function LandingPage() {
    return ( 
      <>
        <Navbar/>
        <Hero/>
        <Section1/>
        <Cards/>
        <Footer/>
      </>
     );
  }
  
  export default LandingPage;