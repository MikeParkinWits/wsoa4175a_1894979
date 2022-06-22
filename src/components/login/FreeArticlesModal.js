import React, { Component } from "react";

//External Packages
import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

//Context Import
import GlobalContext from "../../context/GlobalContext";

export default class FreeArticlesModal extends Component {
  componentDidMount() {
    const {
      freeArticlesLeft,
      signedIn,
      decreaseNumFreeArticles,
      signInFunction,
    } = this.context;

    if (!signedIn) {
      decreaseNumFreeArticles();
    }
  }

  render() {
    const {
      freeArticlesLeft,
      signedIn,
      decreaseNumFreeArticles,
      signInFunction,
    } = this.context;

    return (
      <>
        {freeArticlesLeft > 0 && !signedIn && (
          // && Cookies.get("test") === "true"
          <article className="free-articles-modal">
            Only
            {" " + freeArticlesLeft + " "}
            Free Article Remaining
          </article>
        )}
      </>
    );
  }
}

//Used to access global variables using React Context
FreeArticlesModal.contextType = GlobalContext;
