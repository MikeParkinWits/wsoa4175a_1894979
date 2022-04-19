import React, { Component, useState } from "react";

//External Package Imports
import { Route, Routes, Link, NavLink } from "react-router-dom";

//Image Imports
import logo from "../assets/Logo.svg";

//Style Imports
import "../styles/navbar.css";

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
                to="/wsoa4175a_1894979/"
                onClick={this.closeHamburgerMenu}
              >
                <img src={logo} width="130" alt="Alt Text"></img>
              </NavLink>
            </section>
            <section className="navigation">
              <ul className={this.state.click ? "nav-list active" : "nav-list"}>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/wsoa4175a_1894979/BlogSection/"
                    onClick={this.closeHamburgerMenu}
                  >
                    Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="nav-item"
                    to="/wsoa4175a_1894979/DesignSection/"
                    onClick={this.closeHamburgerMenu}
                  >
                    Design
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/wsoa4175a_1894979/ArtworkSection/"
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
