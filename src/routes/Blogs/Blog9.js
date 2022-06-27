import React, { Component } from "react";
import { Link } from "react-router-dom";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { BlogList } from "../../helpers/BlogList";

//Photo Imports
import BlogPhoto from "../../assets/Blog8/BlogPicture.png";
import BlogPhoto2 from "../../assets/Blog8/BlogPicture2.png";

//Component Imports
import Titles from "../../components/Titles";
import BlogButtons from "../../components/buttons/BlogButtons";
import FreeArticlesLeftUI from "../../components/login/FreeArticlesLeftUI";
import FreeBlogLimitReachedModal from "../../components/login/FreeBlogLimitReachedModal";
import Notifications from "../../components/Notifications";
import ConfirmShamingModal from "../../components/ConfirmShamingModal";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet

//Context Import
import GlobalContext from "../../context/GlobalContext";
import BlogFigure from "../../components/BlogFigure";
import BlogReferences from "../../components/BlogReferences";

export default class Blog9 extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showNetArt } = this.context;

    const blogInfoToLoad =
      BlogList.length -
      parseInt(
        window.location.pathname.charAt(window.location.pathname.length - 2)
      );

    return (
      <>
        {/* React Helmet is used to dynamically adjust the head of the document and add meta data */}
        <Helmet>
          <title>{BlogList[blogInfoToLoad].cardTitle}</title>

          <meta
            name="title"
            property="og:title"
            content={BlogList[blogInfoToLoad].cardTitle}
          />
          <meta property="og:type" content="article" />
          <meta
            name="author"
            property="article:publisher"
            content="Michael Parkin"
          />
          <meta property="article:section" content="Theory" />
          <meta property="article:tag" content="Theory" />
          <meta
            property="og:url"
            content={`https://mikeparkinwits.github.io/wsoa4175a_1894979/Blogs/Blog${blogInfoToLoad}.html`}
          />
          <meta
            property="og:image"
            content={`https://mikeparkinwits.github.io/wsoa4175a_1894979/assets/PreviewImages/Blog${blogInfoToLoad}.svg`}
          />
          <meta
            property="og:image:alt"
            content={BlogList[blogInfoToLoad].imageAltText}
          />
          <meta
            name="description"
            property="og:description"
            content={BlogList[blogInfoToLoad].cardSummary}
          />

          {/*Google Structured Data can only be added inline as it is using JSON-LD - as noted in the w3 here: https://www.w3.org/TR/2016/REC-html51-20161101/semantics-scripting.html#the-script-element */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              name: BlogList[blogInfoToLoad].cardTitle,
              author: {
                "@type": "Person",
                name: "Michael Parkin",
              },
              url: `https://mikeparkinwits.github.io/wsoa4175a_1894979/Blogs/Blog${blogInfoToLoad}.html`,
              headline: BlogList[blogInfoToLoad].cardTitle,
              image: [
                `https://mikeparkinwits.github.io/wsoa4175a_1894979/assets/PreviewImages/Blog${blogInfoToLoad}.svg`,
              ],
              datePublished: BlogList[blogInfoToLoad].cardDate,
            })}
          </script>
        </Helmet>

        <FadeIn transitionDuration={1000}>
          <article className="page-container h-entry">
            <article>
              {
                //Checking if Net Ark Mode is enabled, and if true displaying the Articles Left
                showNetArt && <FreeArticlesLeftUI />
              }

              <Titles
                mainTitle={true}
                title={BlogList[blogInfoToLoad].cardTitle}
                subTitle={true}
                blogDate={BlogList[blogInfoToLoad].cardDate}
                blogWords={BlogList[blogInfoToLoad].blogWords}
              />
              <section className="blog-contents e-content">
                <p>
                  An important skill for any programmer to have is the ability
                  to quickly transfer their skillset between new languages,
                  frameworks, and libraries – as technologies are always
                  changing, and programmers must adapt with them. As such, in
                  this blog post I aim to reflect on my technical engagement for
                  this course – looking specifically at the process of learning,
                  and implementing, an unfamiliar JavaScript library, React JS.
                </p>
                <p>
                  To start, as I was unfamiliar with React JS at the beginning
                  of the course, I set myself three goals to adhere to
                  throughout my entire website’s creation process. First, I
                  wanted to make sure that, even though I was using React JS, I
                  still utilized all preexisting JavaScript, HTML, and CSS
                  fundamentals – such as correct semantic markup, responsive
                  design, good microformats and meta data, and externally linked
                  CSS & JavaScript. Secondly, it was important that when
                  learning, and implementing, React JS, I only used correct
                  conventions – with the appropriate use of props & state,
                  reusable components, client-side routing, and externally
                  imported packages when need be. Lastly, I also wanted to make
                  sure that throughout the entire codebase, I utilize clean
                  coding practices – code that was usable, moderately refined,
                  and easily understandable.
                </p>
                <p>
                  With that in mind, we can then start to look more closely at
                  the website’s creation process – focusing on some of the major
                  obstacles that I faced throughout. From the beginning, through
                  to the final version of the website, I found React would
                  continually challenge my technical ability in some way. More
                  specifically, while I had imagined that the toughest part of
                  the course would be to learn the fundamentals of React, with
                  everything else falling into place soon after, I quickly found
                  this not to be the case; and instead, found the challenge to
                  come from getting React to work exactly how you wanted. To
                  start, I was able to easily setup my website’s structure and
                  layout, using boilerplate code and components to do so.
                  However, upon importing my first package, in order to use
                  react-router and client-side routing, I quickly ran into my
                  first issue: because of this dynamic page routing, metadata
                  also now had to be updated dynamically – requiring the use of
                  both the react-helmet, and react-snap, packages to dynamically
                  update the head, and pre-parse the pages, respectively. This
                  idea then became a recurring theme throughout my experience
                  with React, where installing a specific package adversely
                  affects another aspect of the website – from react-router
                  affecting how metadata is handled; to assigning cookie values,
                  using the js-cookie package, re-rendering the state of the
                  entire website, and requiring the react-memo package to be
                  used to stop pages re-rendering.
                </p>
                <p>
                  Thereafter, another area I found quite challenging was when
                  expanding my internet artwork for the exam. Firstly, because
                  of the nature of my internet artwork, I found myself using a
                  fair number of different packages that either had very limited
                  documentation, or recommended a backend to function more
                  smoothly. However, through additional research I was able to
                  overcome both these issues and get my code functioning
                  correctly. Secondly, when implementing my internet artwork, I
                  found myself needing to access the same state variables
                  throughout multiple different components on my website. While
                  I had originally been passing this information as props
                  through multileveled children, this quickly became extremely
                  messy and convoluted – both breaking my goal for clean code,
                  and increasing the chances of errors and bugs during my
                  websites creation. As such, I researched ways to make state
                  more globally accessible, coming across two different
                  approaches: using the external Library Redux or the internal
                  React Context API. Comparing both, I decided that not only was
                  the Redux Library overly complicated for my use case, but one
                  of the creators, Dan Abramov, even states in the documentation
                  that{" "}
                  <q>
                    don’t use Redux until you have problems with vanilla React
                  </q>{" "}
                  (2022). As such, I decided to utilize the React Context API,
                  as it more easily allowed me to keep track of my internet
                  artwork states in a global way, becoming accessible throughout
                  all my components without the need to drill data down through
                  children component props to access them.
                </p>
                <p>
                  So, in conclusion, I would say that although learning React JS
                  proved to be more challenging than expected, I was able to
                  overcome all the challenges that it threw my way –
                  successfully creating a website that met my technical goals
                  utilizing correct JavaScript, HTML, and CSS fundamentals;
                  correct React JS conventions; and clean code. Although, it is
                  important to note that, while I did outline the challenges I
                  faced in this blog, I do not see any of these challenges as
                  downsides to using React. Every coding language, library, and
                  framework has their own issues and nuances, and React JS is
                  not any different; however, the challenges I faced are also
                  areas that I believe React excels in, allowing you to easily
                  install third-party packages to perform common functions
                  without rewriting all the code yourself, and being able to
                  access values so easily globally. Overall, I would then say
                  that through this semester, and the challenges I faced, I have
                  become proficient with my React JS abilities – but there will
                  most likely always be something new to discover with the
                  library.
                </p>
              </section>
            </article>
            <BlogReferences
              references={[
                {
                  referenceStart: "Abramov, D. (2022). Redux FAQ: General, ",
                  referenceCite: <cite>Redux, </cite>,
                  referenceEnd:
                    "Available At: https://redux.js.org/faq/general#when-should-i-use-redux",
                },
              ]}
            />
            <BlogButtons type="Blog" />
          </article>
        </FadeIn>

        {
          // Outside the FadeIn Function to make smoother loading of modal
          // Checks if Net Ark Mode is enabled, and if true displays relevant Net Art Components

          showNetArt && (
            <>
              {" "}
              <FreeBlogLimitReachedModal />
              <Notifications />
              <ConfirmShamingModal />
            </>
          )
        }
      </>
    );
  }
}

Blog9.contextType = GlobalContext;
