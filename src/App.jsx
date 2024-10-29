import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Careers from "./components/Careers";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JobDetails from "./components/JobDetails";
import Semiconductor_Chip_Design from "./components/Semiconductor_Chip_Design";
import System_Design from "./components/System_Design";
import Artificial_Intelligence from "./components/Artificial_Intelligence";
import Embedded_Solutions from "./components/Embedded_Solutions";
import Automotive_Solutions from "./components/Automotive_Solutions";
import Privacy from "./components/Privacy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="Semiconductor_Chip_Design"
            element={<Semiconductor_Chip_Design />}
          />
          <Route path="System_Design" element={<System_Design />} />
          <Route
            path="Artificial_Intelligence"
            element={<Artificial_Intelligence />}
          />
          <Route
            path="Automotive_Solutions"
            element={<Automotive_Solutions />}
          />
          <Route path="Embedded_Solutions" element={<Embedded_Solutions />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/:jobTitle" element={<JobDetails />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
