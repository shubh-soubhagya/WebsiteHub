import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About"; // ✅ Corrected path
import ProjectsPage from "./pages/Projects";
import ServicesPage from "./pages/Services";
import ContactUsPage from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
