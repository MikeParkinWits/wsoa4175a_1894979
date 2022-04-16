import React, { Component } from "react";

//Component Imports
import Titles from "../components/Titles";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet

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
        {/* React Helmet is used to dynamically adjust the head of the document and add meta data */}
        <Helmet>
          <title>Art Section</title>
          <meta name="author" content="Michael Parkin" />
          <meta
            name="description"
            property="og:description"
            content="All of the art and the posts about art on the website"
          />
          <meta property="og:title" content="Art Section" />
          <meta
            property="og:url"
            content="https://mikeparkinwits.github.io/wsoa4175a_1894979/ArtSection"
          />
        </Helmet>

        <FadeIn transitionDuration={1000}>
          <article className="page-container h-feed">
            <Titles mainTitle={true} title="Net Art" />
            <img
              src={ArtImage}
              title="Art Coming Soon Text"
              alt="Text Saying 'Art Coming Soon'"
              className="art-coming-soon-text"
            ></img>
          </article>
        </FadeIn>
      </>
    );
  }
}
