import React, { Component } from "react";

//External Packages
import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

//Style Imports
import "../../styles/modals.css";

//External Components Import
import CookieCheckbox from "./CookieCheckbox";
import ActionButton from "../buttons/ActionButton";

export default class CookiePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: { functionalCookie: true, performanceCookie: true },
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.saveCookies = this.saveCookies.bind(this);
    this.acceptAll = this.acceptAll.bind(this);
  }

  //Handles checkbox values
  handleCheckbox(event) {
    let state = this.state;
    state.cookies[event.target.name] = event.target.checked;
    this.setState(state);
  }

  //Saves cookie popup selection
  saveCookies = () => {
    const { onCookieSwitch } = this.props;
    const { cookies } = this.state;

    onCookieSwitch();

    Cookies.set("necessaryCookie", true);
    Cookies.set("functionalCookie", cookies.functionalCookie);
    Cookies.set("performanceCookie", cookies.performanceCookie);

    if (cookies.functionalCookie && cookies.performanceCookie) {
      Cookies.set("CookiesConsent", true);
    } else if (Cookies.get("CookiesConsent") !== "true") {
      Cookies.set("CookiesConsent", false);
    }
  };

  //Saves all cookies and disables second popup, as all cookies are true
  acceptAll = () => {
    const { onCookieSwitch, onAcceptButton } = this.props;

    onCookieSwitch();
    onAcceptButton();
  };

  static defaultProps = {
    showCookiePopup: false,
    isPopupSubtext: false,
    popupSubtext: false,
  };

  render() {
    const { showCookiePopup, isPopupSubtext, popupSubtext } = this.props;
    const { cookies } = this.state;
    const { handleCheckbox, saveCookies, acceptAll } = this;

    if (!showCookiePopup) {
      return null;
    }

    return (
      <article className="modal-overlay">
        <section className="modal">
          <header>
            <h2 className="modal-title">Cookie Settings</h2>
            {isPopupSubtext && <p className="modal-subtext">{popupSubtext}</p>}
          </header>

          <CookieCheckbox
            cookieTitle="Required Cookies"
            cookieName="necessaryCookie"
            cookieClassName="denied-mouse"
            isDisabled="disabled"
            isChecked={true}
            onChangeFunction={handleCheckbox}
            checkboxText={
              <>
                These are cookies that help the website to function and are not
                harmful - making your life easier by remembering your choices,
                or keeping you logged in.
              </>
            }
          />

          <CookieCheckbox
            cookieTitle="Functional Cookies"
            cookieName="functionalCookie"
            cookieClassName=""
            isDisabled=""
            isChecked={cookies.functionalCookie}
            onChangeFunction={handleCheckbox}
            checkboxText={
              <>
                These are cookies that{" "}
                <span className="strike-through-text">
                  track your every move on the web and allow advertisements to
                  target your personal habits
                </span>{" "}
                help deliver a superior user experience, making the site
                tailored to your experience.
              </>
            }
          />

          <CookieCheckbox
            cookieTitle="Performance Cookies"
            cookieName="performanceCookie"
            cookieClassName=""
            isDisabled=""
            isChecked={cookies.performanceCookie}
            onChangeFunction={handleCheckbox}
            checkboxText={
              <>
                This site collects cookies to{" "}
                <span className="strike-through-text">
                  track your behaviour around the website to better understand
                  how to make you click on certain things
                </span>{" "}
                help improve the performance of the site for future.
              </>
            }
          />

          <section className="modal-cookie-buttons">
            <ActionButton
              buttonText="Save Preferences"
              buttonClass="decline-button"
              onClickAction={saveCookies}
            />
            <ActionButton
              buttonText="Accept All"
              buttonClass="accept-button"
              onClickAction={acceptAll}
            />
          </section>
        </section>
      </article>
    );
  }
}
