import React, { Component } from "react";

//Component Imports
import BlogCard from "../components/Card";
import Button from "../components/Button";
import Titles from "../components/Titles";

//Importing Helper
import { BlogList } from "../helpers/BlogList.js";

//Import External Packages
import FadeIn from "react-fade-in"; //Documentation can be found here => https://www.npmjs.com/package/react-fade-in

export default class BlogSection extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <FadeIn transitionDuration={1000}>
          <article className="page-container h-feed">
            <Titles mainTitle={true} title="Blog" />
            <section className="card-grid">
              {BlogList.map((blogItem, value) => {
                return (
                  <BlogCard
                    key={value}
                    cardTitle={blogItem.cardTitle}
                    cardDate={blogItem.cardDate}
                    cardSummary={blogItem.cardSummary}
                    image={blogItem.image}
                    imageTitle={blogItem.imageTitle}
                    imageAltText={blogItem.imageAltText}
                    cardRoute={blogItem.cardRoute}
                  />
                );
              })}
            </section>
          </article>
        </FadeIn>
      </>
    );
  }
}
