import React, { Component } from "react";

//Image Imports
import TestImage from "../assets/HeroImage.jpg";

export default class BlogFigure extends Component {
  static defaultProps = {
    imageSource: TestImage,
    imageTitle: "This is a missing image",
    imageAlt: "A missing image with squares of different colours",
    figureCaption: "Figure 1: Caption Missing",
  };
  render() {
    const { imageSource, imageTitle, imageAlt, figureCaption } = this.props;

    return (
      <>
        <figure className="blog-figure">
          <img
            className="blog-image u-photo"
            src={imageSource}
            title={imageTitle}
            alt={imageAlt}
          ></img>
          <figcaption>{figureCaption}</figcaption>
        </figure>
      </>
    );
  }
}
