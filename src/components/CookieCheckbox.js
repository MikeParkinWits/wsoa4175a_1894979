import React, { Component } from "react";

export default class CookieCheckbox extends Component {
  render() {
    let num = 1;
    const {
      cookieTitle,
      cookieName,
      cookieClassName,
      isDisabled,
      isChecked,
      checkboxText,
      onChangeFunction,
    } = this.props;

    return (
      <section className="modal-cookie">
        <header className="modal-cookie-title">
          <h3>{cookieTitle}</h3>
        </header>

        <label className="modal-cookie-checkbox">
          <input
            type="checkbox"
            name={cookieName}
            className={cookieClassName}
            disabled={isDisabled}
            {...(num > 0 ? console.log("1") : console.log("Hello"))}
            onChange={onChangeFunction}
            checked={isChecked}
          ></input>
          <p>{checkboxText}</p>
        </label>
      </section>
    );
  }
}
