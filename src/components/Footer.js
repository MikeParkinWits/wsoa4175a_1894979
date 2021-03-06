import React, { Component } from "react";

//Style Imports
import "../styles/footer.css";

//Context Imports
import GlobalContext from "../context/GlobalContext";

//External Components
import LinkButton from "./buttons/LinkButton";

//Google Login Imports
import GoogleLogin, { GoogleLogout } from "react-google-login";

export default class Footer extends Component {
  //Function called on Google Login/Logout fail for errors
  failedResponse(response) {
    console.log(response);
  }

  render() {
    const { showNetArt } = this.context;

    const { failedResponse } = this;

    //Function called on Google Login/Logout success - inside of render to gian access to context variables
    const successfullyLoggedOut = () => {
      const { toggleNetArt, signInFunction, signedIn } = this.context;

      if (signedIn) {
        signInFunction();
      }

      toggleNetArt();
    };

    return (
      <>
        <footer className="main-footer h-card">
          <section className="main-footer-contents">
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
                  buttonClass="footer-button"
                  buttonLink="/wsoa4175a_1894979/"
                ></LinkButton>
              )}
              buttonText="Login"
              onLogoutSuccess={successfullyLoggedOut}
              onFailure={failedResponse}
              cookiePolicy={"single_host_origin"}
            />
          </section>
        </footer>
      </>
    );
  }
}

Footer.contextType = GlobalContext;
