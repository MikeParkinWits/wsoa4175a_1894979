import React, { Component } from "react";
import "../styles/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="main-footer h-card">
          <section className="main-footer-contents">
            <p className="p-name">Michael Parkin</p>
            <p>|</p>
            <time dateTime="2022">2022</time>
          </section>
        </footer>
      </>
    );
  }
}
