import React, { Component } from "react";

//External Packages
import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

//Component Imports
import ActionButton from "../buttons/ActionButton";

export default class CookieBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bannerVisible: false,
    };

    this.acceptClick = this.acceptClick.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  //Accept Button Function
  acceptClick() {
    const { onPopupAccept } = this.props;

    onPopupAccept();

    this.setState({ bannerVisible: false });
  }

  //Update Button Function
  onUpdate() {
    const { onPreferences } = this.props;

    onPreferences();

    this.setState({ bannerVisible: false });
    Cookies.set("CookieConsent", false);
  }

  //Checks to see if cookies have already been accepted
  componentDidMount() {
    const { debug } = this.props;

    if (Cookies.get("CookieConsent") === undefined || debug) {
      this.setState({ bannerVisible: true });
    }
  }

  render() {
    const { bannerVisible } = this.state;

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
                buttonClass="decline-button"
                onClickAction={this.onUpdate}
              />{" "}
              <ActionButton
                buttonText="Accept All Cookies"
                buttonClass="accept-button"
                onClickAction={this.acceptClick}
              />
            </section>
          </section>
        </article>
      );
    }
  }
}
