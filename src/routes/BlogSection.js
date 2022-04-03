import React, { Component } from "react";
import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import Titles from "../components/Titles";

export default class BlogSection extends Component {
  render() {
    return (
      <>
        <Titles title="Blog" />

        <BlogCard />
        <BlogCard />
        <BlogCard />

        <Button />
      </>
    );
  }
}
