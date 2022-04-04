import React, { Component } from "react";
import BlogCard from "../components/BlogCard";
import Titles from "../components/Titles";

export default class BlogSection extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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