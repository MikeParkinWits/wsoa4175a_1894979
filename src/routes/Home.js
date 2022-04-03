import React, { Component } from "react";
import BigCard from "../components/BigCard";
import HeroPage from "../components/HeroPage";

export default class Home extends Component {
  render() {
    return (
      <>
        <HeroPage />

        <article>
          <BigCard cardType="/BlogSection" />
          <BigCard cardType="/DesignSection" />
          <BigCard cardType="/ArtworkSection" />
        </article>
      </>
    );
  }
}
