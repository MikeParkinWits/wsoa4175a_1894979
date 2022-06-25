import React, { Component } from "react";

import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie
import { Navigate } from "react-router-dom";
import { withRouter } from "react-router-dom";

export const GlobalContext = React.createContext();

export class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeArticlesLeft: 2,
      signedIn: false,
      showConfirmationModal: false,
      showNetArt: false,
    };

    this.decreaseNumFreeArticles = this.decreaseNumFreeArticles.bind(this);
    this.signInFunction = this.signInFunction.bind(this);
    this.showConfirmationModalFunction =
      this.showConfirmationModalFunction.bind(this);

    this.toggleNetArt = this.toggleNetArt.bind(this);
  }

  //Function that decreases number of free articles
  decreaseNumFreeArticles() {
    if (this.state.freeArticlesLeft > 0) {
      this.setState({ freeArticlesLeft: this.state.freeArticlesLeft - 1 });
    }
  }

  //Function that toggles signin/signout
  signInFunction() {
    this.setState({
      signedIn: !this.state.signedIn,
      showConfirmationModal: false,
    });
  }

  //Function that toggles the confirmation modal
  showConfirmationModalFunction() {
    this.setState({ showConfirmationModal: !this.state.showConfirmationModal });
  }

  toggleNetArt() {
    const { showNetArt } = this.state;

    if (!showNetArt) {
      Cookies.remove("CookieConsent");
      Cookies.remove("necessaryCookies");
      Cookies.remove("functionalCookies");
      Cookies.remove("performanceCookies");

      alert(
        "Notification preferences are controlled through the browser and must be reset manually"
      );
    }

    this.setState({ showNetArt: !this.state.showNetArt });
    this.setState({ freeArticlesLeft: 2 });
  }

  render() {
    const { freeArticlesLeft, signedIn, showConfirmationModal, showNetArt } =
      this.state;
    const {
      decreaseNumFreeArticles,
      signInFunction,
      showConfirmationModalFunction,
      toggleNetArt,
    } = this;

    return (
      <GlobalContext.Provider
        value={{
          freeArticlesLeft,
          signedIn,
          showConfirmationModal,
          showNetArt,
          decreaseNumFreeArticles,
          signInFunction,
          showConfirmationModalFunction,
          toggleNetArt,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
