import React, { Component } from "react";

//Component Imports
import BlogCard from "../components/Card";
import Titles from "../components/Titles";

//Importing Helper
import { DesignList } from "../helpers/DesignList.js";

//Import External Packages
import FadeIn from "react-fade-in"; //Documentation can be found here => https://www.npmjs.com/package/react-fade-in

export default class DesignSection extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <FadeIn transitionDuration={1000}>
          <Titles title="Design" />
          <article className="card-grid">
            {DesignList.map((designItem, value) => {
              return (
                <BlogCard
                  key={value}
                  cardTitle={designItem.cardTitle}
                  cardDate={designItem.cardDate}
                  cardSummary={designItem.cardSummary}
                  image={designItem.image}
                  imageTitle={designItem.imageTitle}
                  imageAltText={designItem.imageAltText}
                  cardRoute={designItem.cardRoute}
                />
              );
            })}
          </article>
        </FadeIn>
      </>
    );
  }
}
