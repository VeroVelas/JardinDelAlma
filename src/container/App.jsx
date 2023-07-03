import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Collage from "../components/moleculas/Collage";
import Navbar from "../components/moleculas/Navbar";
import Section1 from "../components/moleculas/Section1";
import Cards from "../components/moleculas/Cards";
import Hero from "../components/moleculas/Hero"
import Section2 from "../components/moleculas/Section2";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/hero" element={<Hero/>}/>
            <Route path="/navbar" element={<Navbar/>}/>
            <Route path="/collage" element={<Collage/>}/>
            <Route path="/seccion1" element={<Section1/>}/>
            <Route path="/seccion2" element={<Section2/>}/>
            <Route path="/cards" element={<Cards/>}/>
            <Route path="/landingPage" element={<LandingPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;