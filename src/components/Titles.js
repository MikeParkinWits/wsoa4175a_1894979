import React, { Component } from "react";

//Style Imports
import "../styles/title.css";

export default class Titles extends Component {
  static defaultProps = {
    title: "Title",
    mainTitle: true,
    subTitle: false,
    blogDate: "14 March 2022",
    blogWords: 100,
  };

  render() {
    const { title, mainTitle, subTitle, blogDate, blogWords } = this.props;

    return (
      <>
        <header className="title-header">
          {mainTitle ? (
            <h1 className="title-main p-name">{title}</h1>
          ) : (
            <h2 className="title-second">{title}</h2>
          )}
          {subTitle && (
            <section className="blog-sub-title">
              <time
                className="blog-sub-title-items dt-published"
                dateTime={blogDate}
              >
                Date: {blogDate}
              </time>
              <p className="blog-sub-title-items">|</p>
              <p className="blog-sub-title-items">Words: {blogWords}</p>
            </section>
          )}
        </header>
      </>
    );
  }
}
