import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import RouteDb from "./pages/RouteDb";
import ApplyNow from "./pages/ApplyNow";
import Staff from "./pages/Staff";
import Fleet from "./pages/Fleet";
import Ranks from "./pages/Ranks";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <NavBar />
      
          <ScrollToTop className="scroll__btn shadow" smooth />
      
        <Routes>
          <Route path="/sa-virtual/home" element={<Home />} />
          <Route path="/sa-virtual/aboutUs" element={<AboutUs />} />
          <Route path="/sa-virtual/routedb" element={<RouteDb />} />
          <Route path="/sa-virtual/applyNow" element={<ApplyNow />} />
          <Route path="/sa-virtual/staff" element={<Staff />} />
          <Route path="/sa-virtual/fleet" element={<Fleet />} />
          <Route path="/sa-virtual/ranks" element={<Ranks />} />
        </Routes>

      <Footer />
    </>
  );
};

export default App;
