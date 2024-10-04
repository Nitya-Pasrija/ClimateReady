import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fellowship from "./pages/Fellowship";
import Vision from "./pages/Vision";
import GetStarted from "./pages/GetStarted";

const ClimateReady = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fellowship" element={<Fellowship />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/get-started" element = {<GetStarted />}/>
      </Routes>
    </Router>
  );
};

export default ClimateReady;
