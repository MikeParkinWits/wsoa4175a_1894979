import React, { Component } from "react";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { DesignList } from "../../helpers/DesignList";

//Photo Imports
import Design1Photo from "../../assets/Design2/Gumroad.png";
import Design2Photo from "../../assets/Design2/Figma.png";
import Design3Photo from "../../assets/Design2/Styleguide.svg";

//Component Imports
import Titles from "../../components/Titles";
import BlogReferences from "../../components/BlogReferences";
import BlogButtons from "../../components/BlogButtons";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet
import BlogFigure from "../../components/BlogFigure";

export default class Design1 extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const designInfoToLoad =
      DesignList.length -
      parseInt(
        window.location.pathname.charAt(window.location.pathname.length - 1)
      );
    console.log(DesignList[designInfoToLoad].cardTitle);
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
              <Titles
                mainTitle={true}
                title={DesignList[designInfoToLoad].cardTitle}
                subTitle={true}
                blogDate={DesignList[designInfoToLoad].cardDate}
                blogWords={DesignList[designInfoToLoad].blogWords}
              />
              <section className="blog-contents e-content">
                <p>
                  While most people do not think about the design and style of
                  the websites that they visit, if it is not well planned it can
                  ruin the user experience and deter people from your site. As
                  such, in this design post I will be going over the style guide
                  I created for my website – looking at the process, and
                  inspiration, behind it.
                </p>
                <p>
                  As Lisbeth Thorlacius notes, in the 2007 journal article The
                  Role Of Aesthetics In Web Design, there are four ways in which
                  aesthetics can support a websites creation: they relate to its
                  content and functions, support the senders image, align with
                  the sites genre, and match the target audience (Thorlacius,
                  2007: 67). From this, we can then see that the most important
                  factor to having an appropriately styled website is
                  understanding the sites purpose and function. So, let us start
                  by looking at the long-term goal for my site; which is to
                  either hold, or encompass, a piece of unique net art. As such,
                  it was important that before I even started designing my
                  websites style guide, I had a general idea of what I wanted my
                  net art to be about. While my current idea is still very
                  loose, I know that I want my net art to critique, and expose,
                  the nature of the internet itself – much like Mark Napier’s
                  Shredder 1.1 (1998), or the net art collective JODI by Joan
                  Heemskerk and Dirk Paesmans (1995). So, I thought about design
                  aesthetics that can portray this idea of the inner workings of
                  the internet, and landed on the design of brutalism – which is
                  known for its emphasis of function over form. However, I
                  believe that brutalism is too harsh for my websites design, as
                  it detracts from the overall user experience. So, I kept
                  searching for something that utilized the ideas of brutalism,
                  but was as user-friendly as material/minimalistic design –
                  leading me to the new design aesthetic of neubrutalism.
                  Neubrutalism, a term coined by Michał Malewicz earlier this
                  year, is a design aesthetic that falls in-between that of
                  brutalism and minimalism – utilizing the harsh lines, shadows,
                  and contrast of brutalism; in addition to more colourful
                  illustrations, and legible typography, found in minimalism
                  (Malewicz, 2022: para. 11 - 19). Examples, and inspirations,
                  for this design aesthetic can be seen in websites in figures 1
                  and 2 below. Thus, neubrutalism was not only an ideal fit for
                  my website, but it would also allow me to experiment with a
                  new aesthetic.
                </p>
                <BlogFigure
                  imageSource={Design1Photo}
                  title="A screenshot of Gumroad.com"
                  imageAlt="A screenshot of the website Gumroad.com's homepage"
                  figureCaption="Figure 1: Screenshot of Gumroad.com"
                />

                <BlogFigure
                  imageSource={Design2Photo}
                  title="A screenshot of Figma.com"
                  imageAlt="A screenshot of the website Figma.com's homepage"
                  figureCaption="Figure 2: Screenshot of Figma.com"
                />
                <p>
                  With that in mind, we can then start to look more closely at
                  my websites style guide below – beginning with the colour
                  palette. As noted, neubrutalism is known for using bright,
                  contrasting, colours; however, I did not want these colours to
                  detract from content of the site. As such, I made use of more
                  muted colours for the overall website colour scheme, and only
                  used the more vibrant colours to create more colourful moments
                  through the illustrations. This then helped to draw attention
                  to these illustrations, while keeping everything extremely
                  legible.
                </p>
                <BlogFigure
                  imageSource={Design3Photo}
                  title="My websites style guide"
                  imageAlt="My websites style guide showing its colour scheme, typefaces, logo, and interaction visuals"
                  figureCaption="Figure 3: My websites style guide"
                />
                <p>
                  Next, we can look at the websites typeface. Unlike pure
                  brutalism, neubrutalism makes use of much cleaner, more
                  legible, typefaces – with an emphasis placed on using them at
                  large scales. As such, I wanted my websites typeface to be
                  bold, and legible, for titles; while also having a smaller,
                  regular style, option for more general information. Through
                  this size and font style, I could then also create a good
                  visual hierarchy, while still sticking to the design aesthetic
                  of neubrutalism.
                </p>
                <p>
                  Thereafter, we can explore the interactable elements on the
                  site. While brutalism, and neubrutalism, are known for their
                  harsh lines and borders, I did not want this to deter from the
                  overall usability of the site. As such, I made sure that
                  interactable elements on the site were clearly interactable,
                  both before being hovered over and after. As such, I decided
                  to implement the hover effect of a harsh, no fade, shadow –
                  which proved to be extremely effective.
                </p>
                <p>
                  Lastly, I have also included The Internet as We Know logo.
                  While this is not as vital, it is still important to consider
                  and should match the overall design aesthetic of the site.
                  Here, I have presented two variations of the logo: the main
                  one, seen on the left, which is used when size is not an
                  issue; and the smaller one, on the right, which is used in
                  places such as the website favicon icon. However, I believe
                  that this logo may need to be reworked in later versions of
                  the site, as it could incorporate more colour to better fit
                  the neubrutalistic style of the site.
                </p>
              </section>
            </article>
            <BlogReferences
              references={[
                {
                  referenceStart: "Figma. (2022). ",
                  referenceCite: <cite>Apple. </cite>,
                  referenceEnd:
                    "[Online]. Availalble At: https://www.figma.com",
                },
                {
                  referenceStart: "Gumroad. (2022). ",
                  referenceCite: <cite>Gumroad. </cite>,
                  referenceEnd:
                    "[Online]. Available At: https://www.gumroad.com",
                },
                {
                  referenceStart: "Heemskerk, J. and Paesmans, D. (1998). ",
                  referenceCite: <cite>JODI </cite>,
                  referenceEnd:
                    "[Internet]. Available At: http://wwwwwwwww.jodi.org/",
                },
                {
                  referenceStart:
                    "Malewicz, M. (2022). Neubrutalism is taking over the web. ",
                  referenceCite: <cite>Hype4 Academy. </cite>,
                  referenceEnd:
                    "Available at: https://hype4.academy/articles/design/neubrutalism-is-taking-over-web",
                },
                {
                  referenceStart: "Napier, M. (1998). ",
                  referenceCite: <cite>Shredder 1.1. </cite>,
                  referenceEnd:
                    "[Internet]. Available At: http://www.marknapier.com/portfolio/shredder/",
                },
                {
                  referenceStart:
                    "Thorlacius, L. (2007). The Role of Aesthetics in Web Design. ",
                  referenceCite: <cite>Nord. Rev. 28, 63–76. </cite>,
                  referenceEnd:
                    "Available At: https://doi.org/10.1515/nor-2017-0201",
                },
              ]}
            />
            <BlogButtons type="Design" />
          </article>
        </FadeIn>
      </>
    );
  }
}
