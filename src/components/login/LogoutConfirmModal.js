import React, { Component } from "react";

import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

//Style Imports
import "../../styles/cookiePopup.css";
import ActionButton from "../ActionButton";
import GlobalContext from "../../context/GlobalContext";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import GoogleLogo from "../../assets/GLogo.svg";

export default class ProfileModal extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log(response);
      console.log(response.profileObj);
      signInFunction();
      updateUserInfo(
        response.profileObj.imageUrl,
        response.profileObj.name,
        response.profileObj.email
      );
    };

    const failedResponse = (response) => {
      console.log(response);
    };

    const {
      showProfilePage,
      signedIn,
      signInFunction,
      showProfilePageFunction,
      updateUserInfo,
      userInfo,
    } = this.context;

    if (!showProfilePage) {
      return null;
    } else {
      return (
        <article className="modal-overlay">
          <section className="profile-modal">
            <header className="profile-modal-header">
              <h2 className="profile-modal-title">Are You Sure?</h2>
              <p className="profile-modal-subtext">
                Are you sure that you want to logout and{" "}
                <span className="strike-through-text">
                  stop providing us with your personal information which we sell
                  to advertizers, and link to your other profiles, across the
                  internet
                </span>{" "}
                worsen your experience?
              </p>
            </header>

            <section className="modal-button-container">
              <GoogleLogout
                clientId="438147070218-ntafm247ii9dm17lgo110daid1rbb4kv.apps.googleusercontent.com"
                render={(renderProps) => (
                  <ActionButton
                    onClickAction={renderProps.onClick}
                    disabled={renderProps.disabled}
                    buttonText={"Yes"}
                    buttonClass="modal-decline-button"
                  ></ActionButton>
                )}
                buttonText="Login"
                onLogoutSuccess={signInFunction}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              <ActionButton
                buttonText="No"
                buttonClass="modal-accept-button"
                onClickAction={showProfilePageFunction}
              />
            </section>
          </section>
        </article>
      );
    }
  }
}

ProfileModal.contextType = GlobalContext;
