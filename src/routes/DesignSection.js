import React, { Component } from "react";

//Component Imports
import BlogCard from "../components/Card";
import Titles from "../components/Titles";

//Importing Helper
import { DesignList } from "../helpers/DesignList.js";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet
import ActionButton from "../components/ActionButton";

export default class DesignSection extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      cardsVisible: 6,
    };

    this.showMoreCards = this.showMoreCards.bind(this);
  }

  //Function to load more cards
  showMoreCards() {
    this.setState({ cardsVisible: this.state.cardsVisible + 3 });
  }

  render() {
    const { cardsVisible } = this.state;

    return (
      <>
        {/* React Helmet is used to dynamically adjust the head of the document and add meta data */}
        <Helmet>
          <title>Design Section</title>
          <meta name="author" content="Michael Parkin" />
          <meta
            name="description"
            property="og:description"
            content="All of the posts about the design of the website"
          />
          <meta property="og:title" content="Design Section" />
          <meta
            property="og:url"
            content="https://mikeparkinwits.github.io/wsoa4175a_1894979/DesignSection"
          />
        </Helmet>

        <FadeIn transitionDuration={1000}>
          <article className="page-container h-feed">
            <Titles mainTitle={true} title="Design" />
            <section className="card-grid">
              {DesignList.map((designItem, value) => {
                return (
                  <BlogCard
                    key={value}
                    cardTitle={designItem.cardTitle}
                    cardDate={designItem.cardDate}
                    cardSummary={designItem.cardSummary}
                    image={designItem.image}
                    imageTitle={designItem.imageTitle}
                    imageAltText={designItem.imageAltText}
                    cardRoute={designItem.cardRoute}
                  />
                );
              })}
            </section>

            {cardsVisible < DesignList.length && (
              <ActionButton
                buttonText="Load More Posts"
                onClickAction={this.showMoreCards}
              />
            )}
          </article>
        </FadeIn>
      </>
    );
  }
}
