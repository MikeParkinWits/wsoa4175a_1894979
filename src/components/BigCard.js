import React, { Component } from "react";

import { Route, Routes, Link, NavLink } from "react-router-dom";

//Style Imports
import "../Stylesheet/bigcard.css";

export default class BigCard extends Component {
  render() {
    return (
      <>
        <section className="big-card">
          <NavLink className="big-card-nav" to={this.props.cardRoute}>
            <img
              src={this.props.image}
              alt=""
              width="320"
              height="250"
              title=""
            ></img>
            <header className="big-card-info">
              <h2>{this.props.cardType}</h2>
            </header>
          </NavLink>
        </section>
      </>
    );
  }
}
