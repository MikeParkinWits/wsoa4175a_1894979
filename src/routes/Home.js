import React, { Component } from "react";

//Components
import HomepageCard from "../components/HomepageCard";

//Styles
import "../styles/homepageCard.css";
import "../styles/homepage.css";

//Images
import BlogCardImage from "../assets/HomepageBlogImage.png";
import DesignCardImage from "../assets/HomepageDesignImage.png";

//External Packages
import Typing from "react-typing-animation"; //Used for Hero Typography Animation - Documentation can be found here => https://www.npmjs.com/package/react-typing-animation
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet
import { memo } from "react"; //React memo is used to memorize the title typewriter component and prevent it from rerendering when there are state changes - Documentation can be found here => https://www.npmjs.com/package/react-memo

class Home extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    const { secondPopupSwitcher } = this.props;

    secondPopupSwitcher();
  }

  render() {
    return (
      <>
        {/* React Helmet is used to dynamically adjust the head of the document and add meta data */}
        <Helmet>
          <title>The Internet We Know</title>
          <meta name="author" content="Michael Parkin" />
          <meta
            name="description"
            content="The Internet We Know is a website about the internet that critiques the internet we know today"
          />
          <meta property="og:title" content="The Internet We Know Homepage" />
          <meta
            property="og:url"
            content="https://mikeparkinwits.github.io/wsoa4175a_1894979"
          />
        </Helmet>

        <FadeIn transitionDuration={1000}>
          <article className="hero">
            <section className="page-container">
              <header>
                <h1 className="hero-typography">
                  The internet <br /> we
                  <Typing
                    startDelay={1000}
                    speed={80}
                    className="hero-typewriter"
                  >
                    {" "}
                    love
                    <Typing.Backspace count={4} delay={1000} /> hate
                    <Typing.Backspace count={4} delay={1000} />
                    accept
                  </Typing>
                  <br />
                  today
                </h1>
                <p className="hero-typography-sub-text">
                  & the things we shouldn't overlook
                </p>
              </header>
            </section>
          </article>

          <article>
            <HomepageCard
              leftOrientation={true}
              img={BlogCardImage}
              imgInfo={{
                title: "Blog Post Image",
                altText: "A flat, wireframe-esque, sketch of a blog page",
              }}
              cardInfo={{
                title: "Blog Posts",
                contentP:
                  "The Internet We Know holds a collection of blog posts, posted biweekly, relating to a wide range of topics. These include:",
                contentList: [
                  "Web Design Aesthetics",
                  "Net Art",
                  "Internet Justice",
                ],
              }}
              buttonText={"View Blog Posts"}
              buttonLink={"/wsoa4175a_1894979/BlogSection/"}
            />

            <HomepageCard
              leftOrientation={false}
              img={DesignCardImage}
              imgInfo={{
                title: "Design Decision Image",
                altText:
                  "A flat, wireframe-esque, sketch of a design between two pages",
              }}
              cardInfo={{
                title: "Design Decisions",
                contentP:
                  "While the design of The Internet We Know may seem simple, it was carefully thought out. Visit the design section to see:",
                contentList: ["Styleguides", "Wireframes", "And More to Come"],
              }}
              buttonText={"View Design Decisions"}
              buttonLink={"/wsoa4175a_1894979/DesignSection/"}
            />
          </article>
        </FadeIn>
      </>
    );
  }
}

export default memo(Home);

{
  /* React Memo is used to memorize component to prevent re-rendering when there are state changes, allowing react-typing-animation package not to reload*/
}
