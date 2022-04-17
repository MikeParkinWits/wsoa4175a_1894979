import React, { Component } from "react";

//Importing External Packages
import { Link } from "react-router-dom";

//Importing Styles
import "../styles/blogCard.css";

//Image Imports
import TestImage from "../assets/HeroImage.jpg";

export default class BlogCard extends Component {
  static defaultProps = {
    cardTitle: "Card Title 1",
    cardDate: "14 March 2022",
    cardSummary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, placeat.",
    image: TestImage,
    imageTitle: "Card Test Image",
    imageAltText: "A flat black and grey image of shapes",
    cardRoute: "",
  };

  render() {
    return (
      <>
        <section className="blog-card">
          <Link className="blog-card-link" to={this.props.cardRoute}>
            <img
              className="blog-card-image"
              src={this.props.image}
              title={this.props.imageTitle}
              alt={this.props.imageAltText}
            ></img>
            <section className="card-content">
              <header>
                <time dateTime={this.props.cardDate}>
                  {this.props.cardDate}
                </time>
                <h2>{this.props.cardTitle}</h2>
              </header>
              <p>{this.props.cardSummary}</p>
            </section>
          </Link>
        </section>
      </>
    );
  }
}