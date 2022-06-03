import React, { Component } from "react";

import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie
import ActionButton from "./ActionButton";
import CookiePopup from "./CookiePopup";

export default class CookieBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerVisible: false,
    };

    this.switchState = this.switchState.bind(this);
    this.acceptClick = this.acceptClick.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  switchState() {
    this.setState({ bannerVisible: false });
    Cookies.set("CookieConsent", false);
  }

  acceptClick() {
    const { onPopupAccept } = this.props;

    onPopupAccept();

    this.setState({ bannerVisible: false });
  }

  onUpdate() {
    const { onPreferences } = this.props;

    onPreferences();

    this.setState({ bannerVisible: false });
    Cookies.set("CookieConsent", false);
  }

  componentDidMount() {
    const { debug } = this.props;

    if (Cookies.get("CookieConsent") === undefined || debug) {
      this.setState({ bannerVisible: true });
    }
  }

  render() {
    const { bannerVisible, showCookiePopup } = this.state;

    if (!bannerVisible) {
      return null;
    } else {
      return (
        <article className="cookie-banner-overlay">
          <section className="cookie-banner-container">
            <p className="cookie-banner-contents">
              {" "}
              This website uses cookies to{" "}
              <span className="strike-through-text">
                monitor your activity and track you on the internet
              </span>{" "}
              enhance the user experience.
            </p>
            <section className="cookie-banner-button-container">
              <ActionButton
                buttonText="Update Preferences"
                buttonClass="cookie-banner-decline-button"
                onClickAction={this.onUpdate}
              />{" "}
              <ActionButton
                buttonText="Accept All Cookies"
                buttonClass="cookie-banner-accept-button"
                onClickAction={this.acceptClick}
              />
            </section>
          </section>
        </article>
      );
    }
  }
}
