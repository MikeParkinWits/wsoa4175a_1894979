import React, { Component } from "react";

import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

export const GlobalContext = React.createContext();

export class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeArticlesLeft: 2,
      signedIn: false,
      showConfirmationModal: false,
      showNetArt: true,
      showRoachModal: true,
      blogsBeforeRoachModal: 5,
    };

    this.decreaseNumFreeArticles = this.decreaseNumFreeArticles.bind(this);
    this.signInFunction = this.signInFunction.bind(this);
    this.showConfirmationModalFunction =
      this.showConfirmationModalFunction.bind(this);

    this.toggleNetArt = this.toggleNetArt.bind(this);
    this.showRoachModalToggle = this.showRoachModalToggle.bind(this);
    this.decreaseBlogsBeforeRoachModal =
      this.decreaseBlogsBeforeRoachModal.bind(this);
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

  //Function to reset the net artwork
  toggleNetArt() {
    const { showNetArt } = this.state;

    if (!showNetArt || Cookies.remove("CookieConsent") === "true") {
      if (Cookies.remove("CookieConsent") === "true") {
        alert(
          "Notification preferences are controlled through the browser and must be reset manually"
        );
      }
      Cookies.remove("CookieConsent");
      Cookies.remove("necessaryCookies");
      Cookies.remove("functionalCookies");
      Cookies.remove("performanceCookies");
    }

    this.setState({ showNetArt: !this.state.showNetArt });
    this.setState({ freeArticlesLeft: 2 });
    this.setState({ showRoachModal: true });
    this.setState({ blogsBeforeRoachModal: 5 });
  }

  showRoachModalToggle() {
    this.setState({ showRoachModal: !this.state.showRoachModal });
  }

  decreaseBlogsBeforeRoachModal() {
    this.setState({
      blogsBeforeRoachModal: this.state.blogsBeforeRoachModal - 1,
    });
  }

  render() {
    const {
      freeArticlesLeft,
      signedIn,
      showConfirmationModal,
      showNetArt,
      showRoachModal,
      blogsBeforeRoachModal,
    } = this.state;
    const {
      decreaseNumFreeArticles,
      signInFunction,
      showConfirmationModalFunction,
      toggleNetArt,
      showRoachModalToggle,
      decreaseBlogsBeforeRoachModal,
    } = this;

    return (
      <GlobalContext.Provider
        value={{
          freeArticlesLeft,
          signedIn,
          showConfirmationModal,
          showNetArt,
          showRoachModal,
          blogsBeforeRoachModal,
          decreaseNumFreeArticles,
          signInFunction,
          showConfirmationModalFunction,
          toggleNetArt,
          showRoachModalToggle,
          decreaseBlogsBeforeRoachModal,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
