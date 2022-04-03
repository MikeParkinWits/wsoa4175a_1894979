import React, { Component } from "react";

import { Route, Routes, Link, NavLink } from "react-router-dom";

export default class BlogCard extends Component {
  render() {
    return (
      <>
        <section>
          <NavLink className="blog-card" to="/DesignSection">
            <img src="/" alt="Alt" width="320" height="320" title="Title"></img>
            <section className="card-content">
              <header>
                <time dateTime="14 March 2022">| 14 March 2022</time>
                <h2>Blog Name</h2>
              </header>
              <p>Summary</p>
            </section>
          </NavLink>
        </section>
      </>
    );
  }
}
