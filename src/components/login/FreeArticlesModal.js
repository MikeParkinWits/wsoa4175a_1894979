import React, { Component } from "react";

//External Packages
import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

export default class FreeArticlesModal extends Component {
  render() {
    const { freeArticlesLeft } = this.props;
    return (
      <>
        {freeArticlesLeft > 0 && (
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
