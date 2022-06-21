import React, { Component, useState } from "react";

//External Package Imports
import { Route, Routes, Link, NavLink } from "react-router-dom";

//Image Imports
import logo from "../assets/Logo.svg";
import login from "../assets/Login.svg";

//Style Imports
import "../styles/navbar.css";

//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import ActionButton from "./ActionButton";

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
    const { click } = this.state;

    const responseGoogle = (response) => {
      console.log(response);
      console.log(response.profileObj);
      this.props.signedIn();
    };

    const failedResponse = (response) => {
      console.log(response);
    };

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
                <img
                  src={logo}
                  width="130"
                  alt="The Internet We Know Logo"
                ></img>
              </NavLink>
            </section>
            <section className="navigation">
              <ul className={click ? "nav-list active" : "nav-list"}>
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
                  {!this.props.signedInValue ? (
                    <GoogleLogin
                      clientId="438147070218-ntafm247ii9dm17lgo110daid1rbb4kv.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <ActionButton
                          onClickAction={renderProps.onClick}
                          disabled={renderProps.disabled}
                          buttonText={
                            <>
                              {" "}
                              <img
                                src={login}
                                width="25"
                                alt="The Internet We Know Logo"
                                className="login-icon"
                              ></img>{" "}
                              Login
                            </>
                          }
                          buttonClass="google-login-button-nav"
                        ></ActionButton>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={failedResponse}
                      cookiePolicy={"single_host_origin"}
                    />
                  ) : (
                    <GoogleLogout
                      clientId="438147070218-ntafm247ii9dm17lgo110daid1rbb4kv.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <ActionButton
                          onClickAction={renderProps.onClick}
                          disabled={renderProps.disabled}
                          buttonText={
                            <>
                              {" "}
                              <img
                                src={login}
                                width="25"
                                alt="The Internet We Know Logo"
                                className="login-icon"
                              ></img>{" "}
                              Logout
                            </>
                          }
                          buttonClass="google-login-button-nav"
                        ></ActionButton>
                      )}
                      buttonText="Login"
                      onLogoutSuccess={this.props.signedIn}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  )}
                </li>
              </ul>
            </section>

            <section
              className="hamburger-menu"
              onClick={this.hamburgerMenuClick}
            >
              {click ? (
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
