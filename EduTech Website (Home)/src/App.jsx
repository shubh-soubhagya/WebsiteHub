
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Import your components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// ✅ Import your pages
import Home from "./pages/Home-a";

function App() {
  return (
    <Router>
      {/* Background wrapper */}
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">

        {/* --- Navbar (Always Visible) --- */}
        <Navbar />

        {/* --- Main Page Content --- */}
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* --- Footer (Always Visible) --- */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;

