import React, { Component } from "react";

//React Router Imports
import { Link } from "react-router-dom";

//Styling
import "../../styles/linkButton.css";

export default class LinkButton extends Component {
  static defaultProps = {
    buttonLink: "",
    buttonText: "Button",
  };

  render() {
    const { buttonLink, buttonText } = this.props;

    return (
      <>
        <Link className="main-button" to={buttonLink}>
          {buttonText}
        </Link>
      </>
    );
  }
}
