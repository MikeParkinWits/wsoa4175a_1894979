import React, { Component } from "react";

//React Router Imports
import { Link } from "react-router-dom";

//Styling
import "../../styles/linkButton.css";

export default class LinkButton extends Component {
  static defaultProps = {
    linkClassName: "main-button",
    buttonLink: "",
    onClickAction: "",
    buttonText: "Button",
  };

  render() {
    const { linkClassName, buttonLink, onClickAction, buttonText } = this.props;

    return (
      <>
        <Link className={linkClassName} to={buttonLink} onClick={onClickAction}>
          {buttonText}
        </Link>
      </>
    );
  }
}
