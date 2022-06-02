import React, { Component } from "react";

//React Router Imports
import { Link } from "react-router-dom";

//Styling
import "../styles/actionButton.css";

export default class ActionButton extends Component {
  static defaultProps = {
    buttonText: "Button",
    buttonClass: "main-button",
    onClickAction: {},
  };

  render() {
    const { buttonClass, buttonText, onClickAction } = this.props;

    return (
      <button className={buttonClass} onClick={onClickAction}>
        {buttonText}
      </button>
    );
  }
}
