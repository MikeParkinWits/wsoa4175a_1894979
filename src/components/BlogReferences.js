import React, { Component } from "react";

//Importing Style Components
import "../styles/blogReferences.css";

//Importing Components
import Titles from "./Titles";

export default class BlogReferences extends Component {
  static defaultProps = {
    references: [
      {
        referenceStart: "Name, Initial, (Date). Reference Title, ",
        referenceCite: <cite>Citation </cite>,
        referenceEnd: "Available At: ",
      },
    ],
  };

  render() {
    const { references } = this.props;

    return (
      <>
        <footer>
          <Titles title="References" mainTitle={false} />
          <section className="blog-references">
            <ol className="blog-list">
              {references.map((blogItem, value) => {
                return (
                  <li>
                    {blogItem.referenceStart}
                    {blogItem.referenceCite}
                    {blogItem.referenceEnd}
                  </li>
                );
              })}
            </ol>
          </section>
        </footer>
      </>
    );
  }
}
