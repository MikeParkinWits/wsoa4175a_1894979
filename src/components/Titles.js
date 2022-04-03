import React, { Component } from "react";

export default class Titles extends Component {
  render() {
    return (
      <>
        <header>
          <h1>{this.props.title}</h1>
          {this.props.t ? <h2></h2> : console.log("t")}
        </header>
      </>
    );
  }
}
