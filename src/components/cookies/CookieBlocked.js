import React, { Component } from "react";

import "../../styles/cookieBlocked.css";

import BlockedImage from "../../assets/BlockedSymbol.svg";

export default class CookieBlocked extends Component {
  render() {
    return (
      <article className="modal-overlay">
        <section className="modal">
          <header className="cookie-blocked-header">
            <img
              className="blocked-image"
              src={BlockedImage}
              title={"Blocked Image"}
              alt={"Blocked Symbol"}
            ></img>
            <h2>Cookies Blocked</h2>
          </header>
          <p className="cookie-blocked-subtext">
            Cookies have been blocked by your browser. Please change your
            settings, and then refresh the page, to enable cookies{" "}
            <span className="strike-through-text">
              and let us track and monitor your online presence to sell to
              advertizers for our own gain
            </span>{" "}
            for the best experience
          </p>
        </section>
      </article>
    );
  }
}
