import React, { Component } from "react";

export const GlobalContext = React.createContext();

export class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeArticlesLeft: 2,
      signedIn: false,
      showProfilePage: false,
      userInfo: { image: "", name: "", email: "" },
    };

    this.decreaseNumFreeArticles = this.decreaseNumFreeArticles.bind(this);
    this.signInFunction = this.signInFunction.bind(this);
    this.showProfilePageFunction = this.showProfilePageFunction.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
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
      showProfilePage: false,
    });
  }

  //Function that toggles the profile modal
  showProfilePageFunction() {
    this.setState({ showProfilePage: !this.state.showProfilePage });
  }

  //Function that changes user login information
  updateUserInfo(image, name, email) {
    this.setState(
      (prevState) => {
        let userInfo = Object.assign({}, prevState.userInfo); // creating copy of state variable jasper
        userInfo.image = image;
        userInfo.name = name;
        userInfo.email = email; // update the name property, assign a new value
        return { userInfo }; // return new object jasper object);
      },
      () => {
        console.log(this.state.userInfo);
      }
    );
  }

  render() {
    const { freeArticlesLeft, signedIn, showProfilePage, userInfo } =
      this.state;
    const {
      decreaseNumFreeArticles,
      signInFunction,
      showProfilePageFunction,
      updateUserInfo,
    } = this;
    return (
      <GlobalContext.Provider
        value={{
          freeArticlesLeft,
          signedIn,
          showProfilePage,
          userInfo,
          decreaseNumFreeArticles,
          signInFunction,
          showProfilePageFunction,
          updateUserInfo,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;
