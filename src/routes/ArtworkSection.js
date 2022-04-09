import React, { Component } from "react";

//Component Imports
import Titles from "../components/Titles";

//Import External Packages
import FadeIn from "react-fade-in"; //Documentation can be found here => https://www.npmjs.com/package/react-fade-in

//Image Imports
import ArtImage from "../assets/ArtComingSoonImage.svg";

export default class BlogSection extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <FadeIn transitionDuration={1000}>
          <Titles title="Net Art" />
          <img
            src={ArtImage}
            title="Art Coming Soon Text"
            alt="Text Saying 'Art Coming Soon'"
            className="art-coming-soon-text"
          ></img>
        </FadeIn>
      </>
    );
  }
}
