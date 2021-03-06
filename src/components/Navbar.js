import React, { Component } from "react";

//External Package Imports
import { Route, Routes, Link, NavLink } from "react-router-dom";

//Image Imports
import logo from "../assets/Logo.svg";

//Style Imports
import "../styles/navbar.css";

//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Google Login Imports
import GoogleLogin, { GoogleLogout } from "react-google-login";

//Context Imports
import GlobalContext from "../context/GlobalContext";

//External Components Import
import ActionButton from "./buttons/ActionButton";

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

  //Function called on Google Login/Logout fail for errors
  failedResponse(response) {
    console.log(response);
  }

  render() {
    const { click } = this.state;
    const { signedIn, showConfirmationModalFunction, showNetArt } =
      this.context;
    const { closeHamburgerMenu, hamburgerMenuClick, failedResponse } = this;

    //Function called on Google Login/Logout success to change global state - inside render to access context variables
    const responseGoogle = () => {
      const { signInFunction } = this.context;

      signInFunction();
    };

    return (
      <>
        <header className="header-nav">
          <nav className="navbar">
            <section className="logo">
              <NavLink
                className="logo"
                to="/wsoa4175a_1894979/"
                onClick={closeHamburgerMenu}
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
                    onClick={closeHamburgerMenu}
                  >
                    Blog
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="nav-item"
                    to="/wsoa4175a_1894979/DesignSection/"
                    onClick={closeHamburgerMenu}
                  >
                    Design
                  </NavLink>
                </li>

                {
                  //Showing login/logout button if net art mode enabled
                  showNetArt && (
                    <li>
                      {!signedIn ? (
                        <GoogleLogin
                          clientId="438147070218-ntafm247ii9dm17lgo110daid1rbb4kv.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <ActionButton
                              onClickAction={renderProps.onClick}
                              disabled={renderProps.disabled}
                              buttonText={
                                <>
                                  {" "}
                                  <FontAwesomeIcon
                                    icon="fa-user"
                                    className="login-icon"
                                  />
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
                        <ActionButton
                          onClickAction={showConfirmationModalFunction}
                          buttonText={
                            <>
                              {" "}
                              <FontAwesomeIcon
                                icon="fa-user"
                                className="login-icon"
                              />
                              Logout
                            </>
                          }
                          buttonClass="google-login-button-nav"
                        ></ActionButton>
                      )}
                    </li>
                  )
                }
              </ul>
            </section>

            <section className="hamburger-menu" onClick={hamburgerMenuClick}>
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

//Used to access global variables using React Context
Navbar.contextType = GlobalContext;
