import React, { Component } from "react";

export default class BlogPhoto extends Component {
  render() {
    return (
      <>
        <figure>
          <img src="/" alt="Alt" width="320" height="320" title="Title"></img>
        </figure>
        <figcaption>Caption</figcaption>
      </>
    );
  }
}
