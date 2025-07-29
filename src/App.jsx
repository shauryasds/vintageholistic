import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CrystalHealingBlog from "./components/CrystalHealingBlog";
import AllBlog from "./pages/AllBlog";
import Services from "./pages/Services";
import Reiki from "./pages/Reiki";
import CrystalHealing from "./pages/CrystalHealing";
import CardReading from "./pages/CardReading";
import Ayurveda from "./pages/Ayurveda";
import PastLifeRegression from "./pages/PastLifeRegression";
import FengShui from "./pages/FengShui";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TopBar from "./components/TopBar";
import Acupressure from "./pages/Acupressure";
import VastuConsultation from "./pages/Vastu";
import Astrology from "./pages/Astrology";
import AyurvedicMagnet from "./pages/AyurvedicMedicine";
import AnnouncementBar from "./components/AnnouncementBar";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <TopBar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<AllBlog />} />
          <Route path="/blog/crystal-healing" element={<CrystalHealingBlog />} />

          <Route path="/services/reki" element={<Reiki />} />
          <Route path="/services/vastu" element={<VastuConsultation />} />
          <Route path="/services/astrology" element={<Astrology />} />
          <Route path="/services/tcm-ayurvedic-magnet-treatment" element={<AyurvedicMagnet />} />

          <Route path="/services/acupressure" element={<Acupressure />} />
          <Route path="/services/crystal-healing" element={<CrystalHealing />} />
          <Route path="/services/reki" element={<Reiki />} />
          <Route path="/services/card-reading" element={<CardReading />} />
          <Route path="/services/past-life-regression" element={<PastLifeRegression />} />
          <Route path="/services/ayurveda" element={<Ayurveda />} />
          <Route path="/services/fengshui" element={<FengShui />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <AnnouncementBar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
