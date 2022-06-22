import React, { Component } from "react";

//Context Import
import GlobalContext from "../../context/GlobalContext";

export default class FreeArticlesLeftUI extends Component {
  componentDidMount() {
    const { signedIn, decreaseNumFreeArticles } = this.context;

    if (!signedIn) {
      decreaseNumFreeArticles();
    }
  }

  render() {
    const { freeArticlesLeft, signedIn } = this.context;

    return (
      <>
        {freeArticlesLeft > 0 && !signedIn && (
          // && Cookies.get("test") === "true"
          <article className="free-blogs-remaining-indicator">
            Only
            {" " + freeArticlesLeft + " "}
            Free Article Remaining. Login for unlimited viewing
          </article>
        )}
      </>
    );
  }
}

//Used to access global variables using React Context
FreeArticlesLeftUI.contextType = GlobalContext;
