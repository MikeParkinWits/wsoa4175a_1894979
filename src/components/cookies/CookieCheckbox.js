import React, { Component } from "react";

export default class CookieCheckbox extends Component {
  render() {
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
            onChange={onChangeFunction}
            checked={isChecked}
          ></input>
          <p>{checkboxText}</p>
        </label>
      </section>
    );
  }
}
