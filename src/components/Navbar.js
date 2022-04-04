import React, { Component, useState } from "react";
import Footer from "./Footer";

import { Route, Routes, Link, NavLink } from "react-router-dom";

import logo from "../assets/Logo.png";

//Style Imports
import "../Stylesheet/navbar.css";

//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };

    this.closeHamburgerMenu = this.closeHamburgerMenu.bind(this);
    this.hamburgerMenuClick = this.hamburgerMenuClick.bind(this);
  }

  closeHamburgerMenu() {
    this.setState({ click: false });
  }

  hamburgerMenuClick() {
    this.setState({ click: !this.state.click });
  }

  render() {
    return (
      <>
        <header className="header-nav">
          <nav className="navbar">
            <section className="logo">
              <NavLink
                className="logo"
                to="/"
                onClick={this.closeHamburgerMenu}
              >
                <img src={logo} width="90" alt="Alt Text"></img>
              </NavLink>
            </section>
            <section className="navigation">
              <ul className={this.state.click ? "nav-list active" : "nav-list"}>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/BlogSection"
                    onClick={this.closeHamburgerMenu}
                  >
                    Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="nav-item"
                    to="/DesignSection"
                    onClick={this.closeHamburgerMenu}
                  >
                    Design
                  </NavLink>{" "}
                </li>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/ArtworkSection"
                    onClick={this.closeHamburgerMenu}
                  >
                    Art
                  </NavLink>
                </li>
              </ul>
            </section>

            <section
              className="hamburger-menu"
              onClick={this.hamburgerMenuClick}
            >
              {this.state.click ? (
                <FontAwesomeIcon icon="fa-xmark" className="menu-icon" />
              ) : (
                <FontAwesomeIcon icon="fa-bars" className="menu-icon" />
              )}
            </section>
          </nav>
        </header>
      </>
    );
  }
}
