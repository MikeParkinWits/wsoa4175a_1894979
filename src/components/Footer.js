import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="main-footer">
          <p>Michael Parkin</p>
          <time dateTime="2022">| 2021</time>
        </footer>
      </React.Fragment>
    );
  }
}
