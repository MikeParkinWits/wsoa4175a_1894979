import React, { Component } from "react";

//External Components Import
import ActionButton from "../buttons/ActionButton";

//Context Import
import GlobalContext from "../../context/GlobalContext";

//Google Login Imports
import GoogleLogin, { GoogleLogout } from "react-google-login";

export default class ConfirmationModal extends Component {
  failedResponse(response) {
    console.log(response);
  }

  render() {
    const {
      showConfirmationModal,
      signInFunction,
      showConfirmationModalFunction,
    } = this.context;

    const { failedResponse } = this;

    if (!showConfirmationModal) {
      return null;
    } else {
      return (
        <article className="modal-overlay">
          <section className="confirmation-modal modal">
            <header className="confirmation-modal-header">
              <h2 className="confirmation-modal-title">Are You Sure?</h2>
              <p className="confirmation-modal-subtext">
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
                    buttonClass="decline-button"
                  ></ActionButton>
                )}
                buttonText="Login"
                onLogoutSuccess={signInFunction}
                onFailure={failedResponse}
                cookiePolicy={"single_host_origin"}
              />
              <ActionButton
                buttonText="No"
                buttonClass="accept-button"
                onClickAction={showConfirmationModalFunction}
              />
            </section>
          </section>
        </article>
      );
    }
  }
}

ConfirmationModal.contextType = GlobalContext;
