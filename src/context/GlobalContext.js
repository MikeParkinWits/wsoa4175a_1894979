import React, { Component } from "react";

export const GlobalContext = React.createContext();

export class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeArticlesLeft: 2,
      signedIn: false,
    };

    this.decreaseNumFreeArticles = this.decreaseNumFreeArticles.bind(this);

    this.signInFunction = this.signInFunction.bind(this);
  }

  //Function that decreases number of free articles
  decreaseNumFreeArticles() {
    if (this.state.freeArticlesLeft > 0) {
      this.setState({ freeArticlesLeft: this.state.freeArticlesLeft - 1 });
    }
  }

  //Function that toggles signin/signout
  signInFunction() {
    this.setState({ signedIn: !this.state.signedIn });
  }

  render() {
    const { freeArticlesLeft, signedIn } = this.state;
    const { decreaseNumFreeArticles, signInFunction } = this;
    return (
      <GlobalContext.Provider
        value={{
          freeArticlesLeft,
          signedIn,
          decreaseNumFreeArticles,
          signInFunction,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
