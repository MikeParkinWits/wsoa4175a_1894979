import React, { Component } from "react";

//React Router Imports
import { Link } from "react-router-dom";

//Styling
import "../styles/button.css";

export default class Button extends Component {
  render() {
    return (
      <>
        <Link className="main-button" to={this.props.buttonLink}>
          {this.props.buttonText}
        </Link>
      </>
    );
  }
}
