import React, { Component } from "react";

import "../styles/cookieBlocked.css";

import BlockedImage from "../assets/BlockedSymbol.svg";
import ActionButton from "./ActionButton";
import GoogleLogin from "react-google-login";

export default class FreeArticleLimitModal extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      console.log(response.profileObj);
      this.props.signedIn();
    };

    if (this.props.freeArticlesLeft > 0 && !this.props.signedInValue) {
      document.body.style.overflow = "scroll";
      return null;
    } else if (this.props.signedInValue) {
      document.body.style.overflow = "scroll";
      return null;
    } else {
      //Stopping scrolling when banner is active
      document.body.style.overflow = "hidden";
      return (
        <article className="cookie-banner-overlay">
          <section className="free-article-limit-reached-banner">
            <header className="free-article-limit-reached-header">
              <h2>Thanks for reading our posts!</h2>
            </header>
            <p className="free-article-limit-banner-contents">
              To continue reading more posts, for free, please login/signup
              below:
            </p>
            <section className="limit-reached-button-container">
              <GoogleLogin
                clientId="438147070218-ntafm247ii9dm17lgo110daid1rbb4kv.apps.googleusercontent.com"
                render={(renderProps) => (
                  console.log("h"),
                  (
                    <ActionButton
                      onClickAction={renderProps.onClick}
                      disabled={renderProps.disabled}
                      buttonText="Continue with Google"
                      buttonClass="google-login-button"
                    ></ActionButton>
                  )
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </section>
            <p className="free-article-limit-banner-subtext">
              {" "}
              By continuing you agree that we can{" "}
              <span className="strike-through-text">
                gain access to your email and send you unsolicited spam
              </span>{" "}
              keep you informed on all new relevant posts in future
            </p>
          </section>
        </article>
      );
    }
  }
}
