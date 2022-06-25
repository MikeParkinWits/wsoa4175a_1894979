import React, { Component } from "react";

//React Router Imports
import { Link } from "react-router-dom";

//Styling
import "../../styles/linkButton.css";

export default class LinkButton extends Component {
  static defaultProps = {
    buttonClass: "main-button",
    buttonLink: "/wsoa4175a_1894979",
    onClickAction: "",
    buttonText: "Button",
  };

  render() {
    const { buttonClass, buttonLink, onClickAction, buttonText } = this.props;

    return (
      <>
        <Link className={buttonClass} to={buttonLink} onClick={onClickAction}>
          {buttonText}
        </Link>
      </>
    );
  }
}
