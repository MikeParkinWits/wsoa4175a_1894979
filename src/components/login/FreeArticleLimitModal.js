import React, { Component } from "react";

import "../../styles/cookieBlocked.css";

import ActionButton from "../ActionButton";
import GoogleLogin from "react-google-login";
import GoogleLogo from "../../assets/GLogo.svg";

//Context Import
import GlobalContext from "../../context/GlobalContext";

export default class FreeArticleLimitModal extends Component {
  render() {
    const {
      freeArticlesLeft,
      signedIn,
      decreaseNumFreeArticles,
      signInFunction,
    } = this.context;

    const responseGoogle = (response) => {
      console.log(response);
      console.log(response.profileObj);
      signInFunction();
    };

    const failedResponse = (response) => {
      console.log(response);
    };

    if (freeArticlesLeft > 0 && !signedIn) {
      document.body.style.overflow = "scroll";
      return null;
    } else if (signedIn) {
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
                  <ActionButton
                    onClickAction={renderProps.onClick}
                    disabled={renderProps.disabled}
                    buttonText={
                      <>
                        {" "}
                        <img
                          src={GoogleLogo}
                          width="15"
                          alt="The Internet We Know Logo"
                          className="google-icon"
                        ></img>{" "}
                        Login with Google
                      </>
                    }
                    buttonClass="google-login-button"
                  ></ActionButton>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={failedResponse}
                cookiePolicy={"single_host_origin"}
              />
            </section>
            <p className="free-article-limit-banner-subtext">
              {" "}
              By continuing you agree that we can{" "}
              <span className="strike-through-text">
                gain access to your email and other personal information to do
                what we please with
              </span>{" "}
              keep you informed on all new relevant posts in future
            </p>
          </section>
        </article>
      );
    }
  }
}

//Used to access global variables using React Context
FreeArticleLimitModal.contextType = GlobalContext;
