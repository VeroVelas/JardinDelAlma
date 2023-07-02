import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Navbar from "../assets/components/moleculas/Navbar";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/navbar" element={<Navbar/>}/>
            <Route path="/landingPage" element={<LandingPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;