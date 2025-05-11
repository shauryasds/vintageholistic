import React from "react";
import {
  BrowserRouter,
  Routes, // Change this to Routes
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CrystalHealingBlog from "./components/CrystalHealingBlog";
import AllBlog from "./pages/AllBlog";
// import Services from "./pages/Services";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes> 
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/blog" element={<AllBlog />} >
        <Route path="/crystal-healing" element={<CrystalHealingBlog />} />
          </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
