import React, { Component } from "react";

//Component Imports
import Button from "./Button";

export default class HomepageCard extends Component {
  render() {
    return (
      <>
        <article
          className={
            this.props.leftOrientation
              ? "homepage-card"
              : "homepage-card homepage-card-reverse"
          }
        >
          {!this.props.leftOrientation && (
            <section className="homepage-card-image">
              <img src={this.props.img}></img>
            </section>
          )}
          <section className="homepage-card-info">
            <h2>{this.props.title}</h2>
            <section className="homepage-card-content">
              <p>{this.props.contentP}</p>
              <ul>
                {this.props.contentList.map((element, key) => {
                  return (
                    <li key={key} className="homepage-list-item">
                      {element}
                    </li>
                  );
                })}
              </ul>
            </section>

            <Button
              buttonText={this.props.buttonText}
              buttonLink={this.props.buttonLink}
            />
          </section>
          {this.props.leftOrientation && (
            <section className="homepage-card-image">
              <img src={this.props.img} height="80%" width="80%"></img>
            </section>
          )}
        </article>
      </>
    );
  }
}
