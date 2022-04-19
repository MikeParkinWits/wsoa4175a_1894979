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
    return (
      <>
        <figure className="blog-figure">
          <img
            className="blog-image u-photo"
            src={this.props.imageSource}
            title={this.props.imageTitle}
            alt={this.props.imageAlt}
          ></img>
          <figcaption>{this.props.figureCaption}</figcaption>
        </figure>
      </>
    );
  }
}
