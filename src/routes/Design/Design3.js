import React, { Component } from "react";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { DesignList } from "../../helpers/DesignList";

//Photo Imports
import Design1Photo from "../../assets/Design2/Gumroad.png";
import Design2Photo from "../../assets/Design2/Figma.png";
import Design3Photo from "../../assets/Design2/Styleguide.svg";
import BlogFigure from "../../components/BlogFigure";

//Component Imports
import Titles from "../../components/Titles";
import BlogReferences from "../../components/BlogReferences";
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

export default class Design3 extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showNetArt } = this.context;

    const designInfoToLoad =
      DesignList.length -
      parseInt(
        window.location.pathname.charAt(window.location.pathname.length - 2)
      );

    return (
      <>
        {/* React Helmet is used to dynamically adjust the head of the document and add meta data */}
        <Helmet>
          <title>{DesignList[designInfoToLoad].cardTitle}</title>

          <meta
            name="title"
            property="og:title"
            content={DesignList[designInfoToLoad].cardTitle}
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
            content={`https://mikeparkinwits.github.io/wsoa4175a_1894979/Design/Design${designInfoToLoad}.html`}
          />
          <meta
            property="og:image"
            content={`https://mikeparkinwits.github.io/wsoa4175a_1894979/assets/PreviewImages/Design${designInfoToLoad}.svg`}
          />
          <meta
            property="og:image:alt"
            content={DesignList[designInfoToLoad].imageAltText}
          />
          <meta
            name="description"
            property="og:description"
            content={DesignList[designInfoToLoad].cardSummary}
          />

          {/*Google Structured Data can only be added inline as it is using JSON-LD - as noted in the w3 here: https://www.w3.org/TR/2016/REC-html51-20161101/semantics-scripting.html#the-script-element */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              name: DesignList[designInfoToLoad].cardTitle,
              author: {
                "@type": "Person",
                name: "Michael Parkin",
              },
              url: `https://mikeparkinwits.github.io/wsoa4175a_1894979/Design/Design${designInfoToLoad}.html`,
              headline: DesignList[designInfoToLoad].cardTitle,
              image: [
                `https://mikeparkinwits.github.io/wsoa4175a_1894979/assets/PreviewImages/Design${designInfoToLoad}.svg`,
              ],
              datePublished: DesignList[designInfoToLoad].cardDate,
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
                title={DesignList[designInfoToLoad].cardTitle}
                subTitle={true}
                blogDate={DesignList[designInfoToLoad].cardDate}
                blogWords={DesignList[designInfoToLoad].blogWords}
              />
              <section className="blog-contents e-content">
                <p>
                  Although often overlook during a website’s creation, the
                  design of the site is extremely important and should be
                  considered at all levels. Thus, in this design post I hope to
                  highlight this by exploring some of the major design decisions
                  that were made throughout the creation of my website, The
                  Internet We Know. To do this, I start by outlining my chosen
                  theme for the site, and some of the ways I utilized good
                  design principles. Lastly, I then conclude by reflecting on
                  whether I believe I succeeded with my websites overall design.
                </p>
                <p>
                  Firstly, we can start by looking at the goal for my websites
                  design and theme. As noted in my website style guide design
                  post, I wanted the visual theme for the site to portray my
                  internet artworks goals – revealing the inner workings, and
                  normalized aspects, of the internet to users. As such, this
                  then drew me to the visual design aesthetics of brutalism, and
                  then later neubrutalism, as both place an emphasis on sharp
                  lines and embrace elements that are traditionally hidden for
                  aesthetic purposes – with neubrutalism being slightly more
                  modern and colourful than brutalism. However, achieving this
                  aesthetic proved as a challenge to me, as all previous
                  websites I had designed made use of a more modern,
                  minimalistic, aesthetic. Although, after exploring various
                  different websites that used the same aesthetic, as outlined
                  in previous blog posts, I believe that I was successfully able
                  to portray this visual aesthetic.
                </p>
                <p>
                  However, whilst visual aesthetics are an important aspect of
                  web design, they are not the only aspect to keep in mind; and
                  instead, the designer must also make sure to carefully
                  consider the user interface (UI) and user experience (UX) of
                  the website too. According to Don Norman, in his seminal work
                  <cite>The Design of Everyday Things</cite>, a good UX makes
                  use of two things – it meets the end-user’s expectations with
                  very little confusion, as well as provides the user with
                  simple, and accessible, ways to perform actions (Norman, 1998:
                  XIV). So, to meet these to requirements, throughout the site I
                  have considered the actions that users may perform on various
                  different pages, and made them easily accessible – from a
                  persistent navigation bar that contains basic navigation
                  options; to buttons on blog pages that allow you to quickly,
                  and easily, move between adjacent posts. Not only that, but
                  Jenny Kidd states, in their 2016 book{" "}
                  <cite>Representation</cite>, that{" "}
                  <q>
                    signs and codes work to indicate meaning in texts… and to
                    present certain things as logical and natural, and by
                    extension other readings as illogical
                  </q>{" "}
                  (Kidd, 2016: 22). So, I made a conscious effort to only use
                  the most common signs when creating the navigation bar and
                  blog navigation buttons – such as keeping the navigation bars
                  placement on the top of the screen and using the website logo
                  as a home button.
                </p>
                <p>
                  Next, we can then begin to look at the UI design of my
                  website. Although its visuals are unique, utilizing a fairly
                  new design aesthetic, the fundamentals of good UI design on
                  the web have still been considered – from the layout of
                  elements on the site, to visual cues. As such, I believe that
                  the site makes use of a good visual hierarchy, consistency,
                  and does not prioritize visual aesthetics at the expense of
                  usability. However, it is important to note that while I do
                  employ good UI practices throughout most of my site, in the
                  areas where these UI practices are broken it has been done
                  deliberately – such as utilizing deceptive design practices
                  throughout my web art.
                </p>
                <p>
                  In conclusion, I would then say that overall I am extremely
                  happy with my websites design – as I made use of an
                  interesting, and exciting, new visual aesthetic; while not
                  sacrificing the UI and UX of the website. Not only that, but
                  by making all my design decisions deliberately, I am able to
                  subvert them to highlight my internet artworks themes and
                  goals.
                </p>
              </section>
            </article>
            <BlogReferences
              references={[
                {
                  referenceStart: "Kidd, J. (2015). ",
                  referenceCite: <cite>Representation. </cite>,
                  referenceEnd:
                    "Key ideas in media and cultural studies. London ; New York: Routledge.",
                },
                {
                  referenceStart: "Nielsen, J. (1994). ",
                  referenceCite: (
                    <cite>
                      10 Usability Heuristics for User Interface Design.{" "}
                    </cite>
                  ),
                  referenceEnd:
                    "Nielsen Norman Group. Available At: https://www.nngroup.com/ articles/ten-usability-heuristics/",
                },
              ]}
            />
            <BlogButtons type="Design" />
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

Design3.contextType = GlobalContext;
