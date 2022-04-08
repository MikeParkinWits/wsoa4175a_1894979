import React, { Component } from "react";

import { Route, Routes, Link, NavLink } from "react-router-dom";

//Style Imports
import "../toDelete/bigcard.css";

export default class BigCard extends Component {
  render() {
    return (
      <>
        <section className="big-card">
          <NavLink className="big-card-nav" to={this.props.cardRoute}>
            <header className="big-card-info">
              <h2>{this.props.cardType}</h2>
            </header>
            <img
              src={this.props.image}
              alt=""
              width="3200"
              height="250"
              title=""
            ></img>
          </NavLink>
        </section>
      </>
    );
  }
}
