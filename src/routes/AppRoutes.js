import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EccoLayout from "../components/EccoLayout/EccoLayout";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/ContactUs";
import Gallery from "../views/Gallery";
import Blog from "../views/Blog";

const AppRoutes = () => {
  return (
    <Router>
      <EccoLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </EccoLayout>
    </Router>
  );
};

export default AppRoutes;
