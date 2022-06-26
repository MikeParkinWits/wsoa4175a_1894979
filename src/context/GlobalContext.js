import React, { Component } from "react";

//External Package Import
import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

export const GlobalContext = React.createContext();

//Context Component that holds global net art values instead passing data through several nested children components
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

  //Function to toggle/reset the net artwork
  toggleNetArt() {
    const { showNetArt } = this.state;

    if (!showNetArt && Cookies.get("CookiesConsent") === "true") {
      if (Notification.permission !== "default") {
        alert(
          "For the best experience, notification prefences must be reset - which can only be done manually, as they are controlled by the browser. This can be done on Chrome-based browsers by clicking the lock icon next to the websites URL."
        );
      }

      Cookies.remove("CookiesConsent");
      Cookies.remove("necessaryCookie");
      Cookies.remove("functionalCookie");
      Cookies.remove("performanceCookie");
    }

    this.setState({ showNetArt: !this.state.showNetArt });
    this.setState({ freeArticlesLeft: 2 });
    this.setState({ showConfirmShameModal: true });
    this.setState({ blogsBeforeConfirmShameModal: 5 });
    this.setState({ notificationsBeforeDefault: 3 });
  }

  //Function to show/hide confirm shaming modal
  showConfirmShameModalToggle() {
    this.setState({ showConfirmShameModal: !this.state.showConfirmShameModal });
  }

  //Function that decreases every time user opens a blog, used to check when to show confirm shaming modal
  decreaseblogsBeforeConfirmShameModal() {
    this.setState({
      blogsBeforeConfirmShameModal: this.state.blogsBeforeConfirmShameModal - 1,
    });
  }

  //Function that decreases every time notification tries to be sent but is blocked by browser, used to check if in-browser notifications should be enabled instead
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
