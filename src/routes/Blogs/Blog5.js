import React, { Component } from "react";
import { Link } from "react-router-dom";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { BlogList } from "../../helpers/BlogList";

//Photo Imports
import BlogPhoto from "../../assets/Blog5/BlogPicture.png";
import BlogPhotoTwo from "../../assets/Blog5/BlogPicture2.jpg";
import BlogFigure from "../../components/BlogFigure";

//Component Imports
import Titles from "../../components/Titles";
import BlogReferences from "../../components/BlogReferences";
import BlogButtons from "../../components/buttons/BlogButtons";
import FreeArticlesLeftUI from "../../components/login/FreeArticlesLeftUI";
import FreeBlogLimitReachedModal from "../../components/login/FreeBlogLimitReachedModal";
import Notifications from "../../components/Notifications";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet

export default class Blog5 extends Component {
  //Lifecycle method that scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
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
              <FreeArticlesLeftUI />
              <Titles
                mainTitle={true}
                title={BlogList[blogInfoToLoad].cardTitle}
                subTitle={true}
                blogDate={BlogList[blogInfoToLoad].cardDate}
                blogWords={BlogList[blogInfoToLoad].blogWords}
              />
              <section className="blog-contents e-content">
                <p>
                  Before deciding on the aesthetic, and design, for my website;
                  I wanted to have a good idea of the type of internet artwork
                  that I would be creating throughout the semester. As such, in
                  this blog post I will be outlining the artwork that I intend
                  to create and the process behind its inception – looking at my
                  inspirations, the themes I aim to explore through the artwork,
                  the challenges it may pose, and how my internet art has
                  influenced my websites overall design.
                </p>
                <p>
                  Firstly, I began my process by exploring a plethora of
                  different internet artworks, and the meanings behind them;
                  with the goal of finding potential themes that interested me.
                  From this, I then found myself continually coming back to one
                  internet artwork in particular – <cite>Shredder 1.1</cite> by
                  Mark Napier (1998). On the website, users can input any site
                  they choose, and have it be displayed in a broken, ‘shredded’,
                  state (as seen in figure 1 below) – where Napier takes the
                  chosen website, deconstructs its code, and reinterprets it
                  through a Perl script that he created. Through this new
                  interpretation of the webpage, users are then exposed to the
                  inner workings of the internet – a theme I knew I wanted to
                  explore in my artwork. Thereafter, I also came across the
                  digital art collection <cite>The Uncomfortable</cite>, by
                  Katerina Kamprani (2017), which depicts everyday items that
                  are purposefully designed in opposition to their intended
                  functions (as seen in figure 2 below). While not an internet
                  artwork, this collection sparked my interest in subverting
                  functions we take for granted daily.
                </p>
                <BlogFigure
                  imageSource={BlogPhoto}
                  title="Screenshot of the net art Shredder 1.1"
                  imageAlt="Screenshot of the net art Shredder 1.1"
                  figureCaption="Figure 1: Example of shredded website on Shredder 1.1 (Napier, 1998)"
                />
                <BlogFigure
                  imageSource={BlogPhotoTwo}
                  title="Example of artwork from The Uncomfortable digital art collection"
                  imageAlt="A digital picture of a useless watering can that waters into itself"
                  figureCaption="Figure 2: Example of an artwork from The Uncomfortable digital collection (Kamprani, 2017)"
                />
                <p>
                  As such, these two artworks then led to the theme, and idea, I
                  want to explore in my internet artwork – subverting the
                  expectations, and design principles, that we have begun to
                  accept on the internet today; bringing attention to the parts
                  of the internet that we should not ignore when visiting a
                  webpage, but do. For example, almost everyone is familiar with
                  the feeling of viewing a webpage that is covered with a popup
                  asking you to accept all cookies, with the option to decline
                  hidden unnecessarily; or, when you find an article that you
                  are interested in, only to be told that you must create an
                  account to read more than just the first paragraph, an account
                  that then spams you endlessly. These are just two of the many
                  examples of bad web design that have become normalized today;
                  and thus, for my internet art, I aim to mimic these ideas in
                  extreme ways throughout the site, bringing to light aspects of
                  the web which we should not accept. So, while many internet
                  artworks may be quite challenging to create on a technical
                  level, I believe that the challenge for this internet artwork
                  lies more in its implementation – as the design tactics I aim
                  to use are common practice, but must be used in such a way
                  that makes it clear that it is a satire of modern website
                  design.
                </p>
                <p>
                  Lastly, because I intend for my website to be more than just a
                  site that holds internet art, instead being an actual piece of
                  internet art in and of itself, it is important to understand
                  how this effects my websites aesthetics and design. At first,
                  I thought about implementing the aesthetic of brutalism, which
                  is known for prioritizing functionality over visuals –
                  utilizing thick lines, harsh shadows, and very little visual
                  ‘fluff’ – as this would help to portray how my artwork is
                  trying to show the inner workings, and crux, of the internet.
                  However, I found this to be quite harsh and take away from the
                  overall experience of the site, potentially deterring users
                  from using the site altogether. As such, I settled on using
                  the aesthetic of neubrutalism – which makes use of brutalistic
                  elements, while still being visually appealing and colourful.
                  This is elaborated on further in my{" "}
                  <Link
                    to="/wsoa4175a_1894979/Design/Design2/"
                    className="inline-link"
                  >
                    website style guide design post
                  </Link>{" "}
                  .
                </p>
              </section>
            </article>
            <BlogReferences
              references={[
                {
                  referenceStart: "Katerina Kamprani. (2017). ",
                  referenceCite: <cite>The Uncomfortable </cite>,
                  referenceEnd:
                    "[Digital]. Availalble At: https://www.theuncomfortable.com/",
                },
                {
                  referenceStart: "Mark Napier. (1998). ",
                  referenceCite: <cite>Shredder 1.1 </cite>,
                  referenceEnd:
                    "[Online]. Availalble At: http://potatoland.org/shredder/shredder.html",
                },
              ]}
            />
            <BlogButtons type="Blog" />
          </article>
        </FadeIn>
        <FreeBlogLimitReachedModal />
        <Notifications />
      </>
    );
  }
}
