import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EccoLayout from "../components/EccoLayout/EccoLayout";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/ContactUs";
import Gallery from "../views/Gallery";

const AppRoutes = () => {
  const [title, setTitle] = useState("Eccosphere");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Router>
      <EccoLayout>
        <Routes>
          <Route exact path="/" element={<Home setTitle={setTitle} />} />
          <Route exact path="/about" element={<About setTitle={setTitle} />} />
          <Route
            exact
            path="/contact"
            element={<Contact setTitle={setTitle} />}
          />
          <Route
            exact
            path="/gallery"
            element={<Gallery setTitle={setTitle} />}
          />
        </Routes>
      </EccoLayout>
    </Router>
  );
};

export default AppRoutes;
