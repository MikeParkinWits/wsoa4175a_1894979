import React, { Component } from "react";

//Importing Helpers
import { BlogList } from "../helpers/BlogList.js";

//Importing Components
import Button from "./Button.js";

export default class BlogButtons extends Component {
  static defaultProps = {
    type: "Blog",
  };
  render() {
    const url = window.location.pathname;
    const numBlogs = BlogList.length;
    const currBlog = parseInt(url.charAt(window.location.pathname.length - 1));

    var urlEnd = url.indexOf("/");
    var path = url.substring(urlEnd).slice(0, -1);

    return (
      <>
        <section className="blog-buttons">
          {currBlog > 1 && (
            <Button
              buttonText={`Previous ${this.props.type} Post`}
              buttonLink={path + (currBlog - 1)}
            />
          )}
          {currBlog < numBlogs && (
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
