import React, { Component } from "react";

import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

//Style Imports
import "../styles/cookiePopup.css";
import CookieCheckbox from "./CookieCheckbox";
import ActionButton from "./ActionButton";

export default class CookiePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: { functionalCookies: true, performanceCookies: true },
    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.saveCookies = this.saveCookies.bind(this);
  }

  handleCheckbox = (event) => {
    let state = this.state;
    state.cookies[event.target.name] = event.target.checked;
    this.setState(state);
  };

  saveCookies = () => {
    this.props.onCookieSwitch();

    const cookieState = this.state.cookies;

    Cookies.set("necessaryCookies", true);
    Cookies.set("functionalCookies", cookieState.functionalCookies);
    Cookies.set("performanceCookies", cookieState.performanceCookies);

    if (cookieState.functionalCookies && cookieState.performanceCookies) {
      Cookies.set("CookieConsent", true);
      this.props.onNew();
    } else {
      Cookies.set("CookieConsent", false);
    }
  };

  acceptAll = () => {
    this.props.onCookieSwitch();
    Cookies.set("necessaryCookies", true);
    Cookies.set("functionalCookies", true);
    Cookies.set("performanceCookies", true);
    this.props.onNew();
  };
  static defaultProps = {
    showCookiePopup: false,
  };

  render() {
    const { showCookiePopup, onCookieSwitch, isPopupSubtext, popupSubtext } =
      this.props;

    if (!showCookiePopup) {
      console.log(showCookiePopup);
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
            cookieName="necessaryCookies"
            cookieClassName="denied-mouse"
            isDisabled="disabled"
            isChecked={true}
            onChangeFunction={this.handleCheckbox}
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
            cookieName="functionalCookies"
            cookieClassName=""
            isDisabled=""
            isChecked={this.state.cookies.functionalCookies}
            onChangeFunction={this.handleCheckbox}
            checkboxText={
              <>
                These are cookies that{" "}
                <span className="strike-through-text">
                  track your every move on the web and allow advertisements to
                  to target your personal habits
                </span>{" "}
                help deliver a superior user experience, making the site
                tailored to your experience.
              </>
            }
          />

          <CookieCheckbox
            cookieTitle="Performance Cookies"
            cookieName="performanceCookies"
            cookieClassName=""
            isDisabled=""
            isChecked={this.state.cookies.performanceCookies}
            onChangeFunction={this.handleCheckbox}
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
              buttonClass="cookie-banner-decline-button"
              onClickAction={this.saveCookies}
            />
            <ActionButton
              buttonText="Accept All"
              buttonClass="cookie-banner-accept-button"
              onClickAction={this.acceptAll}
            />
          </section>
        </section>
      </article>
    );
  }
}
