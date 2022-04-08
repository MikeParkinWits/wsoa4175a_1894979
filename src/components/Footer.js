import React, { Component } from "react";
import "../styles/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="main-footer">
          <section className="main-footer-contents">
            <p>Michael Parkin</p>
            <p>|</p>
            <time dateTime="2022">2021</time>
          </section>
        </footer>
      </>
    );
  }
}
