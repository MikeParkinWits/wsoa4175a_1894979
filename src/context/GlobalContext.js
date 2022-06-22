import React, { Component } from "react";

export const GlobalContext = React.createContext();

export class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeArticlesLeft: 2,
      signedIn: false,
      showConfirmationModal: false,
    };

    this.decreaseNumFreeArticles = this.decreaseNumFreeArticles.bind(this);
    this.signInFunction = this.signInFunction.bind(this);
    this.showConfirmationModalFunction =
      this.showConfirmationModalFunction.bind(this);
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

  render() {
    const { freeArticlesLeft, signedIn, showConfirmationModal } = this.state;
    const {
      decreaseNumFreeArticles,
      signInFunction,
      showConfirmationModalFunction,
    } = this;

    return (
      <GlobalContext.Provider
        value={{
          freeArticlesLeft,
          signedIn,
          showConfirmationModal,
          decreaseNumFreeArticles,
          signInFunction,
          showConfirmationModalFunction,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
