import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProjectPage from "./components/ProjectPage";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";

function App() {
  const [changeMode, setChangeMode] = useState(true);
  return (
    <Router>
      <div className="App">
        <Navbar changeMode={changeMode} setChangeMode={setChangeMode} />
        <Routes>
          <Route path="/" element={<HomePage changeMode={changeMode} />} />
          <Route
            path="/about"
            element={<AboutPage changeMode={changeMode} />}
          />
          <Route
            path="/contact"
            element={<ContactPage changeMode={changeMode} />}
          />
          <Route
            path="/projects/"
            element={<ProjectPage changeMode={changeMode} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer changeMode={changeMode} />
      </div>
    </Router>
  );
}

export default App;
