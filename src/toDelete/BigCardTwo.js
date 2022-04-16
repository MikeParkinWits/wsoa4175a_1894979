import React, { Component } from "react";

import { Route, Routes, Link, NavLink } from "react-router-dom";

//Style Imports
//import "../styles/bigcard2.css";

import { ReactComponent as ReactLogo } from "../assets/Blog.svg";

export default class BigCardTwo extends Component {
  render() {
    return (
      <>
        <section className="big-card">
          <NavLink className="big-card-nav" to={this.props.cardRoute}>
            <section className="sect">
              <header className="big-card-info">
                <h2>{this.props.cardType}</h2>
              </header>

              {/*               <ReactLogo className="test-onet" />
               */}
            </section>

            <img
              src={this.props.image}
              alt=""
              width="320"
              height="250"
              title=""
            ></img>
          </NavLink>
        </section>
      </>
    );
  }
}
