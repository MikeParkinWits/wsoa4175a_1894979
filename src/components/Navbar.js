import React, { Component } from "react";
import Footer from "./Footer";

import { Route, Routes, Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <NavLink
            className={(navData) => (navData.isActive ? "logo active" : "logo")}
            to="/"
          >
            Home
            <img src="" width="66" height="55" alt="Alt Text"></img>
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-item active" : "nav-item"
            } //This form of 'className' replaces activeClassName => see https://dev.to/gabrlcj/react-router-v6-some-of-the-new-changes-181m
            to="/BlogSection"
          >
            Blog
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-item active" : "nav-item"
            }
            to="/DesignSection"
          >
            Design
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-item active" : "nav-item"
            }
            to="/ArtworkSection"
          >
            Art
          </NavLink>
        </nav>
      </React.Fragment>
    );
  }
}
