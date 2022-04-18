import React, { Component } from "react";

//Importing Helpers
import { BlogList } from "../helpers/BlogList.js";
import { DesignList } from "../helpers/DesignList.js";

//Importing Components
import Button from "./Button.js";

export default class BlogButtons extends Component {
  static defaultProps = {
    type: "Blog",
  };
  render() {
    const url = window.location.pathname;

    const currBlog = parseInt(url.charAt(window.location.pathname.length - 1));

    const urlEnd = url.indexOf("/");
    const path = url.substring(urlEnd).slice(0, -1);

    let numPosts = null;

    if (this.props.type == "Blog") {
      numPosts = BlogList.length;
    } else {
      numPosts = DesignList.length;
    }

    return (
      <>
        <section className="blog-buttons">
          {currBlog > 1 && (
            <Button
              buttonText={`Previous ${this.props.type} Post`}
              buttonLink={path + (currBlog - 1)}
            />
          )}
          {currBlog < numPosts && (
            <Button
              buttonText={`Next ${this.props.type} Post`}
              buttonLink={path + (currBlog + 1)}
            />
          )}
        </section>
      </>
    );
  }
}
