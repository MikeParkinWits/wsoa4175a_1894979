import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/BlogCard";
import BigCard from "./components/BigCard";
import HeroPage from "./components/HeroPage";
import React, { Component } from "react";

//Routing Imports
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import BlogSection from "./routes/BlogSection";
import DesignSection from "./routes/DesignSection";
import ArtworkSection from "./routes/ArtworkSection";
import Blog from "./routes/Blog";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BlogSection" element={<BlogSection />} />
          <Route path="/DesignSection" element={<DesignSection />} />
          <Route path="/ArtworkSection" element={<ArtworkSection />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
