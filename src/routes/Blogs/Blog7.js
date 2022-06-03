import React, { Component } from "react";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { BlogList } from "../../helpers/BlogList";

//Photo Imports
import BlogPhoto from "../../assets/Blog6/BlogPicture.png";
import BlogPhotoTwo from "../../assets/Blog6/BlogPicture2.png";
import BlogFigure from "../../components/BlogFigure";

//Component Imports
import Titles from "../../components/Titles";
import BlogReferences from "../../components/BlogReferences";
import BlogButtons from "../../components/BlogButtons";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

export default class Blog5 extends Component {
  //Scrolls the page to the top on load
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
                  assignment 2 to understand where I can improve in future. To
                  do so, I start by looking briefly at where I stood in
                  assignment 1 and the improvements I made in relation to its
                  feedback. Thereafter, I look more closely at assignment 2 –
                  exploring my theoretical, and practical, engagement for this
                  quarter.
                </p>
                <p>
                  Firstly, before we can look at assignment 2, we must a full
                  understand of where I stood in the previous assignment. For
                  assignment 1, I was pleased with what I had submitted, having
                  put a large amount of thought, time, and effort into the web
                  design, blogs, potential internet art themes, and overall user
                  experience of the website. As a result, there was very little
                  feedback for me to draw on for assignment 2, mostly relating
                  to very minor adjustments – such as fixing small typos, and
                  deconstructing state and prop variables for cleaner code. As
                  such, this then created a solid grounding to start assignment
                  2 on, allowing me to dedicate as much time as possible to
                  conceptualizing, and creating, my internet artwork.
                </p>
                <p>
                  With that, I then began working on assignment 2, which started
                  with me exploring various websites to understand what I should
                  create for my internet art prototype. As noted in my previous
                  blog post, this then led to me creating a cookie consent
                  system that uses dark UI/UX patterns, and mimicry, in order to
                  make users more aware of the parts of the web that they
                  ignore, but should not. Though, while I originally thought
                  this assignment would rely heavily on technical ability, as it
                  revolved around creating an internet artwork prototype, I soon
                  learnt that this was not the case. Whilst the technical skill
                  needed to create my artworks prototype was substantial
                  (elaborated on further next), in order to make the prototype
                  for my internet artwork as effective as possible I needed to
                  perform a huge amount of research in order to better
                  understand how cookie consent banner’s function, where they
                  are necessary, and how they are abused using dark UI/UX
                  patterns – which can be seen in both the blog posts relating
                  to my internet artwork.
                </p>
                <p>
                  Furthermore, we can then look at my technical engagement for
                  this assignment, which revolved around creating my internet
                  artwork prototype. While I had originally believed that
                  creating this prototype would be quite straightforward, as
                  cookie consent banners can be found on almost all websites, it
                  turned out to be much tricker than expect as there were no
                  react packages with enough customizability for my needs – as
                  noted in my Internet Artwork Prototype blogpost. As such, I
                  found that, even though I am fairly confident in my ReactJS
                  ability, creating this prototype tested my abilities – pushing
                  my knowledge of states and callback functions in React, as
                  well as teaching me how to use browser cookies efficiently.
                  However, in the end I would say I was able to overcome these
                  technical difficulties and produce a prototype artwork that I
                  am proud of.
                </p>
                <p>
                  So, in conclusion, we can then see that although I started
                  this assignment with a solid foundation, it presented its own
                  series of challenges for me to overcome. However, in the end,
                  I would say that I am overall extremely satisfied with my
                  engagement for this assignment, as I was able to create
                  concise and informed blog posts that defined, and improved, my
                  prototype artwork – a prototype artwork that, while limited,
                  gives a good direction of where I am heading for my final
                  submission and internet artwork.
                </p>
                <p>
                  With all of this now outlined, I would then say that I am
                  quite happy with how my prototype turned out. Not only do I
                  believe that I was able to create a successful piece of
                  internet art – being an artwork that critiques a problem that
                  only exists because of the internet, and one which can only be
                  fixed through the internet (Carrier, 2020: para. 12 - 16) –
                  but I was also able create a prototype that, while limited,
                  successfully shows my chosen themes and the direction I am
                  heading it. However, it is important to note that even though
                  the cookie banner has been designed to make users question
                  accepting all cookies without thinking; because this is a
                  prototype, if the user chooses to accept all cookies in the
                  beginning, a huge portion of the prototype is missed. As such,
                  there are still future developments that are planned to not
                  only combat this but also to enhance my overall goal for the
                  site. These include making users sign in to unlock more than a
                  preview for each blog post, adverts that become bigger as you
                  scroll down pages, and browser notifications that are required
                  and spam the user endlessly.
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
