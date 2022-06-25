import React, { Component } from "react";
import { Link } from "react-router-dom";

//Style Imports
import "../../styles/blog.css";

//Importing Context
import GlobalContext, {
  GlobalContextProvider,
} from "../../context/GlobalContext";

//Importing Helper
import { BlogList } from "../../helpers/BlogList";

//Component Imports
import Titles from "../../components/Titles";
import BlogButtons from "../../components/buttons/BlogButtons";
import FreeArticlesLeftUI from "../../components/login/FreeArticlesLeftUI";
import FreeBlogLimitReachedModal from "../../components/login/FreeBlogLimitReachedModal";
import Notifications from "../../components/Notifications";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet

export default class Blog7 extends Component {
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

    const { showNetArt, toggleNetArt } = this.context;
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
              {showNetArt && (
                <>
                  {" "}
                  <FreeArticlesLeftUI />
                  <FreeBlogLimitReachedModal />
                  <Notifications />
                </>
              )}
              <Titles
                mainTitle={true}
                title={BlogList[blogInfoToLoad].cardTitle}
                subTitle={true}
                blogDate={BlogList[blogInfoToLoad].cardDate}
                blogWords={BlogList[blogInfoToLoad].blogWords}
              />
              <section className="blog-contents e-content">
                <p>
                  An important part of any creative practice is being able to
                  look back and reflect on it, understanding where your
                  strengths and weakness lay in the work. Thus, in this blog
                  post I aim to do just that – reflecting on my submission for
                  assignment 2 to understand where I can improve for future
                  assignments. To do so, I start by looking briefly at where I
                  stood in assignment 1 and the improvements I made in relation
                  to its feedback. Thereafter, I look more closely at assignment
                  2 – exploring my theoretical, and practical, engagement for
                  this quarter.
                </p>
                <p>
                  To start, before we can look at assignment 2, we must a full
                  understand of where I stood with the previous assignment.
                  Overall, I was pleased with my assignment 1 submission, having
                  put a large amount of time, thought, and effort into the
                  websites design, blogs, potential internet art themes, and
                  overall user experience. As a result, there was very little
                  feedback for me to draw on for assignment 2, with most
                  relating to very minor adjustments – such as fixing small
                  typos, and deconstructing state and prop variables for cleaner
                  code. As such, this then created a solid grounding for me
                  start assignment 2 on, allowing me to dedicate as much time as
                  possible to conceptualizing, and creating, my internet
                  artwork.
                </p>
                <p>
                  With that, I then began working on my assignment 2 submission,
                  which started with me exploring various websites to understand
                  what I should create for my internet art prototype. As noted
                  in my previous blog post, this then led to me creating a
                  cookie consent system that uses dark UI/UX patterns, and
                  mimicry, in order to make users more aware of the parts of the
                  web that they ignore, but should not. However, while I had
                  originally thought that this assignment would rely on my
                  technical skill, I soon learnt that this was not the case.
                  Whilst the technical skill needed to create my artworks
                  prototype was substantial (elaborated on further in the next
                  paragraph), it turned out that in order to make the prototype
                  for my internet artwork as effective as possible I needed to
                  perform a huge amount of research to better understand how
                  cookie consent banner’s function, where they are necessary,
                  and how they are abused using dark UI/UX patterns – which can
                  be seen in both my previous two blog posts relating to my
                  internet artwork.
                </p>
                <p>
                  In addition to the creative engagement for this assignment, we
                  can then also look at my technical engagement, which revolved
                  around creating my internet artwork prototype. While I had
                  originally believed that creating this prototype would be
                  quite straightforward, as cookie consent banners can be found
                  on almost all websites, it turned out to be much tricker than
                  expect, as there were no React cookie banner packages with
                  enough customizability for my needs – as noted in my{" "}
                  <Link
                    to="/wsoa4175a_1894979/Blogs/Blog6/"
                    className="inline-link"
                  >
                    Internet Artwork Prototype blog post
                  </Link>
                  . As such, I found that, even though I am fairly confident in
                  my ReactJS ability, creating this prototype tested my
                  abilities – pushing my knowledge of states and callback
                  functions in React, as well as teaching me how to use browser
                  cookies efficiently. However, in the end I would say I was
                  able to overcome these technical difficulties and produce a
                  prototype artwork that I am proud of.
                </p>
                <p>
                  So, in conclusion, we can then see that although I started
                  this assignment with a solid foundation, it presented its own
                  series of challenges for me to overcome. However, in the end,
                  I was extremely satisfied with my engagement for this
                  assignment, as I was able to create concise and informed blog
                  posts that defined, and improved, my prototype artwork – a
                  prototype artwork that, while limited, gives a good direction
                  of where I am heading for my final submission and internet
                  artwork.
                </p>
              </section>
            </article>
            <BlogButtons type="Blog" />
          </article>
        </FadeIn>
      </>
    );
  }
}

Blog7.contextType = GlobalContext;
