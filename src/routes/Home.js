import React, { Component } from "react";
import BigCard from "../components/BigCard";
import HeroPage from "../components/HeroPage";

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

        <article>
          <BigCard cardType="/BlogSection" />
          <BigCard cardType="/DesignSection" />
          <BigCard cardType="/ArtworkSection" />
        </article>
      </>
    );
  }
}
