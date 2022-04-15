import React, { Component } from "react";

import { BlogList } from "../helpers/BlogList.js";
import Button from "./Button.js";

export default class BlogButtons extends Component {
  render() {
    const numBlogs = BlogList.length;
    const currBlog = parseInt(
      window.location.pathname.charAt(window.location.pathname.length - 1)
    );
    console.log(numBlogs);
    console.log(currBlog);

    return (
      <>
        <section className="blog-buttons">
          {currBlog > 1 && (
            <Button
              buttonText="Previous Blog"
              buttonLink={`/wsoa4175a_1894979/Blogs/Blog${currBlog - 1}`}
            />
          )}
          {currBlog < numBlogs && (
            <Button
              buttonText="Next Blog"
              buttonLink={`/wsoa4175a_1894979/Blogs/Blog${currBlog + 1}`}
            />
          )}
        </section>
      </>
    );
  }
}
