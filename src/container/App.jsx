import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/landingPage" element={<LandingPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;