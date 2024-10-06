import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fellowship from "./pages/Fellowship";
import Vision from "./pages/Vision";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CreateEvent from "./pages/CreateEvent";
import Resources from "./pages/Resources";
import Report from "./pages/Report";

const ClimateReady = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fellowship" element={<Fellowship />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/get-started" element = {<GetStarted />}/>
        <Route path="/dashboard" element = {<Dashboard />}/>
        <Route path="/profile" element = {<Profile />}/>
        <Route path="/create-event" element = {<CreateEvent />}/>
        <Route path="/resources" element = {<Resources />}/>
        <Route path="/report-event" element = {<Report />}/>
      </Routes>
    </Router>
  );
};

export default ClimateReady;
