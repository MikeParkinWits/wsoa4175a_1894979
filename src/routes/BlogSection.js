import React, { Component } from "react";

//Component Imports
import BlogCard from "../components/Card";
import Titles from "../components/Titles";

//Importing Helper
import { BlogList } from "../helpers/BlogList.js";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet

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
          <title>Blog Section</title>
          <meta name="author" content="Michael Parkin" />
          <meta
            name="description"
            property="og:description"
            content="All of the theory blogs on the website"
          />
          <meta property="og:title" content="Blog Section" />
          <meta
            property="og:url"
            content="https://mikeparkinwits.github.io/wsoa4175a_1894979/BlogSection"
          />
        </Helmet>

        <FadeIn transitionDuration={1000}>
          <article className="page-container h-feed">
            <Titles mainTitle={true} title="Blog" />
            <section className="card-grid">
              {BlogList.map((blogItem, value) => {
                return (
                  <BlogCard
                    key={value}
                    cardTitle={blogItem.cardTitle}
                    cardDate={blogItem.cardDate}
                    cardSummary={blogItem.cardSummary}
                    image={blogItem.image}
                    imageTitle={blogItem.imageTitle}
                    imageAltText={blogItem.imageAltText}
                    cardRoute={blogItem.cardRoute}
                  />
                );
              })}
            </section>
          </article>
        </FadeIn>
      </>
    );
  }
}
