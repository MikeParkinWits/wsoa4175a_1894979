import React, { Component } from "react";
import GlobalContext from "../context/GlobalContext";

import { Link } from "react-router-dom";

import { Navigate, useNavigate } from "react-router";

//Google Login Imports
import GoogleLogin, { GoogleLogout } from "react-google-login";

//Style Imports
import "../styles/footer.css";
import ActionButton from "./buttons/ActionButton";
import LinkButton from "./buttons/LinkButton";

export default class Footer extends Component {
  render() {
    const { showNetArt, toggleNetArt } = this.context;

    return (
      <>
        <footer className="main-footer h-card">
          <section className="main-footer-contents">
            {" "}
            <p className="p-name">Michael Parkin</p>
            <p>|</p>
            <time dateTime="2022">2022</time>
            <GoogleLogout
              clientId="438147070218-ntafm247ii9dm17lgo110daid1rbb4kv.apps.googleusercontent.com"
              render={(renderProps) => (
                <LinkButton
                  onClickAction={renderProps.onClick}
                  buttonText={
                    !showNetArt ? "Enable Net Art" : "Disable Net Art"
                  }
                  linkClassName="footer-button"
                  buttonLink="/wsoa4175a_1894979"
                ></LinkButton>
              )}
              onLogoutSuccess={toggleNetArt}
              cookiePolicy={"single_host_origin"}
            />
          </section>
        </footer>
      </>
    );
  }
}

Footer.contextType = GlobalContext;
