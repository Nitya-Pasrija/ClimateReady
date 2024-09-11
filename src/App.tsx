import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fellowship from "./pages/Fellowship";
import Vision from "./pages/Vision";

const ClimateReady = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fellowship" element={<Fellowship />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
};

export default ClimateReady;
