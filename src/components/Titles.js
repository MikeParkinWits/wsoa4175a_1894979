import React, { Component } from "react";

import "../styles/title.css";

export default class Titles extends Component {
  static defaultProps = {
    mainTitle: true,
    subTitle: false,
    blogDate: "14 March 2022",
    blogWords: 100,
  };

  render() {
    return (
      <>
        <header className="title-header">
          {this.props.mainTitle ? (
            <h1 className="title-main p-name">{this.props.title}</h1>
          ) : (
            <h2 className="title-second">{this.props.title}</h2>
          )}
          {this.props.subTitle && (
            <section className="blog-sub-title">
              <time
                className="blog-sub-title-items dt-published"
                dateTime={this.props.blogDate}
              >
                Date: {this.props.blogDate}
              </time>
              <p className="blog-sub-title-items">|</p>
              <p className="blog-sub-title-items">
                Words: {this.props.blogWords}
              </p>
            </section>
          )}
        </header>
      </>
    );
  }
}
