import React, { Component } from "react";
import BlogCard from "../components/BlogCard";
import Titles from "../components/Titles";

export default class BlogSection extends Component {
  render() {
    return (
      <>
        <Titles title="Net Art" />

        <BlogCard />
        <BlogCard />
        <BlogCard />
      </>
    );
  }
}
