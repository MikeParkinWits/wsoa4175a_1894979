import React, { Component } from "react";

import { Route, Routes, Link, NavLink } from "react-router-dom";

export default class BigCard extends Component {
  render() {
    return (
      <>
        <section>
          <NavLink className="big-card" to={this.props.cardType}>
            <img src="/" alt="Alt" width="320" height="320" title="Title"></img>
            <header>
              <h2>Content Category</h2>
            </header>
          </NavLink>
        </section>
      </>
    );
  }
}
