import React from "react";
// import "./index.css"
// import About from "./routes/About";
// import Project from "./routes/Project";
// import Contact from "./routes/Contact";
import Auth from "./components/authys/Auth";
import PhysicalCharacteristics from "./components/authys/Physicalchar";
import Preferences from "./components/authys/Preferences";
import Homemain from "./components/authys/Homemain"
import Shirt from "./components/authys/Shirt"
import Size from "./components/authys/Size"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route  path="/" element={<Auth />}/>
      <Route path="/physicalchar" element={<PhysicalCharacteristics />}/>
      <Route path="/preferences" element={<Preferences />}/>
      <Route path="/home" element={<Homemain/>}/>
      <Route path="/shirt" element={<Shirt/>}/>
      <Route path="/size" element={<Size/>}/>
    </Routes>
    </Router>
  );
}

export default App;
