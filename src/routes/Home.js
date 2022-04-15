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
import Typing from "react-typing-animation"; //Documentation can be found here => https://www.npmjs.com/package/react-typing-animation
import FadeIn from "react-fade-in"; //Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Button from "../components/Button";
import Helmet from "react-helmet";

//Unused
// import BigCard from "../components/BigCard";
// import HeroPage from "../components/HeroPage";
// import BigCardTwo from "../components/BigCardTwo.js";
// import { CategoryList } from "../helpers/CategoryList";
// import ScrollText from "react-scroll-text";
// import Untitled from "../assets/Untitled-2.jpg";

export default class Home extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
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
                  "Social Justice",
                ],
              }}
              buttonText={"View Blog Posts"}
              buttonLink={"/wsoa4175a_1894979/BlogSection"}
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
                  "Design Decisions While the design of The Internet We Know may seem simple, it was carefully thought out. Visit the design section to see:",
                contentList: [
                  "User Interface/Experience Decisions",
                  "Styleguides",
                  "Wireframes",
                ],
              }}
              buttonText={"View Design Decisions"}
              buttonLink={"/wsoa4175a_1894979/DesignSection"}
            />
          </article>

          {/* 

          <article
            className="hero-container"
            style={{
              backgroundImage: `URL(${test2})`,
              height: "100%",
              justifyContent: "center",
              backgroundPosition: "center",
              filter: "brightness(120%)",
            }}
          >
            <HeroPage />
          </article>


          */}

          {/*<ScrollText className="hero-typography">
          <h1>
            this'a a very long text... this'a a very long text...this'a a very
            long text...this'a a very long text...this'a a very long
            text...this'a a very long text...this'a a very long text...this'a a
            very long text...this'a a very long text...
          </h1>
    </ScrollText> */}

          {/*


          <div className="about-website">
            <div>
              <h2 className="sub-heading">
                What should I know about this website?
              </h2>
              <h3>The Short Answer</h3>
              <p>
                Well... We're still trying to figure that out for ourselves!
              </p>
              <h3>The Long Answer</h3>
              <p>
                It's complicated. Right now, all this website holds is a
                collection of blog posts surrounding various topics - from web
                design, to net art, and even some social justice on the web. In
                the future however, we'll continue to expand the site -
                eventually leading to the inclusion of our own piece of net art.
                So stay tuned!
              </p>
            </div>
            <div className="image-one">
              <img className="untit-img" src={Untitled}></img>
            </div>
          </div>

           */}

          {/*
           
                     <h2 className="sub-heading">Where to?</h2>

           
           */}

          {/*
          <article className="homepage-grid">
            {CategoryList.map((categoryItem, value) => {
              return (
                <BigCard
                  key={value}
                  cardType={categoryItem.name}
                  cardRoute={categoryItem.cardRoute}
                  image={categoryItem.image}
                  className={categoryItem.className}
                />
              );
            })}


            */}

          {/*           

          

                            <BigCardTwo
              className="big-card-comp"
              cardRoute="/ArtworkSection"
              cardType="Blog"
              image={ImageFive}
            />
            <BigCardTwo
              className="big-card-comp"
              cardRoute="/ArtworkSection"
              cardType="Design"
              image={ImageSix}
            />
            <BigCardTwo
              className="big-card-comp"
              cardRoute="/ArtworkSection"
              cardType="Artwork"
              image={ImageFour}
            />    
          */}
          {/*
          </article>
          */}
        </FadeIn>
      </>
    );
  }
}
