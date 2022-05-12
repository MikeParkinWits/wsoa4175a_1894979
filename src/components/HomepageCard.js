import React, { Component } from "react";

//Component Imports
import Button from "./Button";

//Image Imports
import MissingImage from "../assets/HeroImage.jpg";

export default class HomepageCard extends Component {
  static defaultProps = {
    leftOrientation: true,
    img: MissingImage,
    imgInfo: {
      title: "Missing Post Image",
      altText: "A stock white missing image",
    },
    cardInfo: {
      title: "Section Title",
      contentP: "This is the description of the section",
      contentList: ["Info 1", "Info 2", "Info 3"],
    },
    buttonText: "Button To View More",
    buttonLink: "",
  };

  render() {
    const { leftOrientation, img, imgInfo, cardInfo, buttonText, buttonLink } =
      this.props;

    return (
      <>
        <section
          className={
            leftOrientation
              ? "homepage-card"
              : "homepage-card homepage-card-reverse"
          }
        >
          {!leftOrientation && (
            <section className="homepage-card-image">
              <img src={img} title={imgInfo.title} alt={imgInfo.altText}></img>
            </section>
          )}
          <section className="homepage-card-info">
            <h2>{cardInfo.title}</h2>
            <section className="homepage-card-content">
              <p>{cardInfo.contentP}</p>
              <ul>
                {cardInfo.contentList.map((element, key) => {
                  return (
                    <li key={key} className="homepage-list-item">
                      {element}
                    </li>
                  );
                })}
              </ul>
            </section>

            <Button buttonText={buttonText} buttonLink={buttonLink} />
          </section>
          {leftOrientation && (
            <section className="homepage-card-image">
              <img src={img} title={imgInfo.title} alt={imgInfo.altText}></img>
            </section>
          )}
        </section>
      </>
    );
  }
}
