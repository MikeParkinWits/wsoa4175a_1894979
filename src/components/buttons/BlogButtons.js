import React, { Component } from "react";

//Importing Helpers
import { BlogList } from "../../helpers/BlogList.js";
import { DesignList } from "../../helpers/DesignList.js";

//Importing Components
import LinkButton from "./LinkButton.js";

export default class BlogButtons extends Component {
  static defaultProps = {
    type: "Blog",
  };
  render() {
    const url = window.location.pathname;
    const currBlog = parseInt(url.charAt(window.location.pathname.length - 2));
    const urlEnd = url.indexOf("/");
    const path = url.substring(urlEnd).slice(0, -2);
    let numPosts = null;

    const { type } = this.props;

    if (type == "Blog") {
      numPosts = BlogList.length;
    } else {
      numPosts = DesignList.length;
    }

    return (
      <>
        <section className="blog-buttons">
          {currBlog > 1 && (
            <LinkButton
              buttonText={`Previous ${type} Post`}
              buttonLink={path + (currBlog - 1) + "/"}
            />
          )}
          {currBlog < numPosts && (
            <LinkButton
              buttonText={`Next ${type} Post`}
              buttonLink={path + (currBlog + 1) + "/"}
            />
          )}
        </section>
      </>
    );
  }
}
