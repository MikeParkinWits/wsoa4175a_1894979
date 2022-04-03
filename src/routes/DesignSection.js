import React, { Component } from "react";
import BlogCard from "../components/BlogCard";
import Titles from "../components/Titles";

export default class DesignSection extends Component {
  render() {
    return (
      <>
        <Titles title="Design" />

        <BlogCard />
        <BlogCard />
        <BlogCard />
      </>
    );
  }
}
