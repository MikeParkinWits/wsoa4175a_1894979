import React, { Component } from "react";
import BigCard from "../components/BigCard";
import HeroPage from "../components/HeroPage";

import image from "../assets/Test.jpeg";
import imageTwo from "../assets/TestTwo.jpeg";
import imageThree from "../assets/TestThree.jpeg";

export default class Home extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <article>
          <HeroPage />
        </article>

        <article className="homepage-grid">
          <BigCard
            className="big-card-comp"
            cardRoute="/BlogSection"
            cardType="Blogs"
            image={image}
          />
          <BigCard
            className="big-card-comp"
            cardRoute="/DesignSection"
            cardType="Design"
            image={imageTwo}
          />
          <BigCard
            className="big-card-comp"
            cardRoute="/ArtworkSection"
            cardType="Artwork"
            image={imageThree}
          />
        </article>
      </>
    );
  }
}
