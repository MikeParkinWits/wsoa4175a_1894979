import React, { Component } from "react";

//Routing Imports
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import BlogSection from "./routes/BlogSection";
import DesignSection from "./routes/DesignSection";
import ArtworkSection from "./routes/ArtworkSection";
import Blog1 from "./routes/Blogs/Blog1";
import Blog2 from "./routes/Blogs/Blog2";
import Blog3 from "./routes/Blogs/Blog3";

//Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Style Imports
import "./styles/main.css";

//Additional
import FadeIn from "react-fade-in";

//Component Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Unused
// import Card from "./components/BlogCard";
// import BigCard from "./components/BigCard";
// import HeroPage from "./components/HeroPage";
// import logo from "./logo.svg";

library.add(faBars, faX, faXmark);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/wsoa4175a_1894979/" element={<Home />} />
          <Route
            path="/wsoa4175a_1894979/BlogSection"
            element={<BlogSection />}
          />
          <Route
            path="/wsoa4175a_1894979/DesignSection"
            element={<DesignSection />}
          />
          <Route
            path="/wsoa4175a_1894979/ArtworkSection"
            element={<ArtworkSection />}
          />
          <Route path="/wsoa4175a_1894979/Blogs/Blog1" element={<Blog1 />} />
          <Route path="/wsoa4175a_1894979/Blogs/Blog1" element={<Blog2 />} />
          <Route path="/wsoa4175a_1894979/Blogs/Blog1" element={<Blog3 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
