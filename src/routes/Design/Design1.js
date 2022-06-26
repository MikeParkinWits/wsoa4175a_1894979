import React, { Component } from "react";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { DesignList } from "../../helpers/DesignList";

//Photo Imports
import Design1Photo from "../../assets/Design1/Homepage-Desktop.png";
import Design2Photo from "../../assets/Design1/Post-Selector-Desktop.png";
import Design3Photo from "../../assets/Design1/Post-Desktop.png";
import BlogFigure from "../../components/BlogFigure";

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

export default class Design1 extends Component {
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
                  As always, an important step during any websites design are
                  its wireframes – as it helps you, as the designer, to have a
                  good idea of the structure for your site, and the different
                  elements that it will make use of, before creating it. As
                  such, in this design post I have outlined the different
                  desktop wireframes I created, alongside the thinking behind
                  their layouts
                </p>
                <p>
                  To start, we can look at the homepage – which is one of the
                  most important wireframes to create, as the homepage is the
                  first screen new users will see and sets the tone for what the
                  user should expect for the rest of the website. Here, I chose
                  to use a hero typography to draw users in and to contextualize
                  what the website is about in a meaningful, but concise, way.
                  Upon scrolling down, however, they can then gain easy access
                  to two of the websites main aspects (as of right now) – the
                  blog, and design, posts. While I considered merely showing the
                  user the latest posts in each section, I decided against this
                  in the end as I found giving a brief description of, and the
                  type of content they can find in, each section was more
                  valuable – allowing the user to make a more informed decision
                  as to what they want to explore. Thereafter, they can easily
                  access all blog, or design, posts by clicking the button under
                  each section.
                </p>
                <BlogFigure
                  imageSource={Design1Photo}
                  title="My Homepage Wireframes"
                  imageAlt="A picture of my homepage wireframes showing the layout of the site"
                  figureCaption="Figure 1: Homepage Wireframes"
                />
                <p>
                  Next, we can explore the blog/design post selector page. Here,
                  users are shown a grid of cards that represent each post in
                  their respective sections – with each card providing a posts
                  name, upload date, summary, and a relevant colorful diagram.
                  All this information was chosen as it helps the user
                  understand what each post is about, and whether they want to
                  read it, without the continual need to open and close posts –
                  which leads to less user frustration. While I had considered
                  other card styles and layouts – such as horizontally laid out
                  cards in a single vertical row – I decided to use more compact
                  cards, in a grid formation, that allow more information to be
                  shown to the user at once, reducing the amount of scrolling
                  they must perform. Then, once there are more posts on each
                  page, I plan to implement a ‘show more’ button at the bottom
                  that will allow for only six posts to be shown at first, but
                  when clicked will expand to show a further six, and so on.
                </p>
                <BlogFigure
                  imageSource={Design2Photo}
                  title="My Post Selector Wireframes"
                  imageAlt="A picture of my post selector wireframes showing the layout of that page"
                  figureCaption="Figure 2: Post Selector Wireframes"
                />
                <p>
                  Lastly, there is the blog/design post page. While extremely
                  simple, this minimalism was done purposefully to put a focus
                  on the content of the posts. Each post provides the user with
                  the title, date published, and the number of words – which
                  give an indication of how long it will take to read. Then,
                  once the user finishes reading the posts, they are greeted
                  with some navigation buttons at the bottom of the page, which
                  make it extremely easy to move between adjacent posts.
                </p>
                <BlogFigure
                  imageSource={Design3Photo}
                  title="My Post Page Wireframes"
                  imageAlt="A picture of my post page wireframes showing the layout of that page"
                  figureCaption="Figure 3: Post Page Wireframes"
                />
              </section>
            </article>
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

Design1.contextType = GlobalContext;
