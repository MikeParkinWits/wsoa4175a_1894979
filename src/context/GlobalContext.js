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
      showNetArt: false,
      showConfirmShameModal: true,
      blogsBeforeConfirmShameModal: 5,
      notificationsBeforeDefault: 3,
    };

    this.decreaseNumFreeArticles = this.decreaseNumFreeArticles.bind(this);
    this.signInFunction = this.signInFunction.bind(this);
    this.showConfirmationModalFunction =
      this.showConfirmationModalFunction.bind(this);

    this.toggleNetArt = this.toggleNetArt.bind(this);
    this.showConfirmShameModalToggle =
      this.showConfirmShameModalToggle.bind(this);
    this.decreaseblogsBeforeConfirmShameModal =
      this.decreaseblogsBeforeConfirmShameModal.bind(this);
    this.decreaseNotificationsbeforeDefault =
      this.decreaseNotificationsbeforeDefault.bind(this);
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

    if (!showNetArt && Cookies.get("CookieConsent") === "true") {
      if (Cookies.get("CookieConsent") === "true") {
        alert(
          "Notification preferences are controlled through the browser and must be reset manually"
        );
      } else {
        alert(
          "Net Art Enabled - for the best experience please make sure that your computer notifications are enabled"
        );
      }
      Cookies.remove("CookieConsent");
      Cookies.remove("necessaryCookies");
      Cookies.remove("functionalCookies");
      Cookies.remove("performanceCookies");
    }

    this.setState({ showNetArt: !this.state.showNetArt });
    this.setState({ freeArticlesLeft: 2 });
    this.setState({ showConfirmShameModal: true });
    this.setState({ blogsBeforeConfirmShameModal: 5 });
  }

  showConfirmShameModalToggle() {
    this.setState({ showConfirmShameModal: !this.state.showConfirmShameModal });
  }

  decreaseblogsBeforeConfirmShameModal() {
    this.setState({
      blogsBeforeConfirmShameModal: this.state.blogsBeforeConfirmShameModal - 1,
    });
  }

  decreaseNotificationsbeforeDefault() {
    if (this.state.notificationsBeforeDefault > 0) {
      this.setState({
        notificationsBeforeDefault: this.state.notificationsBeforeDefault - 1,
      });
    }
  }

  render() {
    const {
      freeArticlesLeft,
      signedIn,
      showConfirmationModal,
      showNetArt,
      showConfirmShameModal,
      blogsBeforeConfirmShameModal,
      notificationsBeforeDefault,
    } = this.state;
    const {
      decreaseNumFreeArticles,
      signInFunction,
      showConfirmationModalFunction,
      toggleNetArt,
      showConfirmShameModalToggle,
      decreaseblogsBeforeConfirmShameModal,
      decreaseNotificationsbeforeDefault,
    } = this;

    return (
      <GlobalContext.Provider
        value={{
          freeArticlesLeft,
          signedIn,
          showConfirmationModal,
          showNetArt,
          showConfirmShameModal,
          blogsBeforeConfirmShameModal,
          notificationsBeforeDefault,
          decreaseNumFreeArticles,
          signInFunction,
          showConfirmationModalFunction,
          toggleNetArt,
          showConfirmShameModalToggle,
          decreaseblogsBeforeConfirmShameModal,
          decreaseNotificationsbeforeDefault,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
