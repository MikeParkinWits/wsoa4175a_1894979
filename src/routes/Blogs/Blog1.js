import React, { Component } from "react";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { BlogList } from "../../helpers/BlogList";

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

export default class Blog1 extends Component {
  //Lifecycle method which scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { showNetArt } = this.context;

    let blogInfoToLoad =
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
                //Checking if Net Ark Mode is enabled, and if true displaying the Free Articles Left component
                showNetArt && <FreeArticlesLeftUI />
              }

              <Titles
                mainTitle={true}
                title={BlogList[blogInfoToLoad].cardTitle}
                subTitle={true}
                blogDate={BlogList[blogInfoToLoad].cardDate}
                blogWords={BlogList[blogInfoToLoad].blogWords}
                freeArticlesLeft={this.props.freeArticlesLeft}
              />
              <section className="blog-contents e-content">
                <p>
                  While art has traditionally been confined by its physicality
                  and uniqueness, with the introduction of digital technologies,
                  and later the internet, artists have found novel ways of
                  expressing themselves – leading to the creation of web/net
                  art. Thus, in this blog post I aim to evaluate the 2020 net
                  art <cite>This Website Will Self Destruct</cite>, by
                  FemmeAndroid (2020), in order to understand net arts
                  importance in the world today. To do this, I start by
                  introducing the net art, before critically analysing it in
                  relation to traditional art and how both are depicted on the
                  internet.
                </p>
                <p>
                  Firstly, we must start by having a full understanding of the
                  artwork itself. <cite>This Website Will Self Destruct</cite>{" "}
                  is an interactive site, launched during the initial Covid-19
                  lockdowns worldwide, where users can both post, and read,
                  messages anonymously – resulting in everything from deep
                  confessions to silly jokes. However, while this idea alone is
                  nothing novel, frequently seen across the internet through
                  various chat forums and anonymous confession sites, this site
                  goes a step further – it self-destructs if no message is
                  posted within 24 hours of the previous post. This
                  self-destruction then allows the site to differ from other
                  websites on the internet, transforming it from a common forum
                  site into the piece of net art it is.
                </p>
                <p>
                  Next, with a basic understanding of the artwork now outlined,
                  we can then begin analysing the artwork to further understand
                  its importance in relation to more traditional, physical,
                  artworks. In their 2020 article
                  <cite>The Work of Art in the Age of the Internet</cite>, David
                  Carrier (2020) highlights not only the shift away from
                  artworks requiring a physical and unique existence in art
                  galleries, but also their shift into the digital sphere
                  through the internet. However, whilst this allows physical
                  artworks to become more accessible, the online version will
                  always be a digital reproduction of the original. Thus, unlike
                  these physical artworks that are merely reproduced on the
                  internet, net art is created with the unique properties of the
                  internet in mind, and is not possible without its existence
                  (Carrier, 2020: para. 12 - 16).
                </p>
                <p>
                  In the case of <cite>This Website Will Self Destruct</cite>,
                  it requires that multiple users come together to keep the
                  website alive, something that would not have been possible on
                  a long term basis with a physical artwork – especially as the
                  website was created as a space to connect during a global
                  pandemic, where users were forced to isolate themselves from
                  one another physically. As such, this idea of coming together
                  digitally to help keep something alive, in a time of
                  disconnection, death, and uncertainty, forms the crux of the
                  artwork and shows the true value of net art – as without the
                  internet and its 24/7 access, this type of artwork would have
                  already self-destructed and not been nearly as impactful.
                  However, even when the day does come, because of the nature of
                  the internet and its reproducibility, the site will always be
                  accessible through archive services such as the{" "}
                  <cite>Wayback Machine</cite>, allowing for much of the same
                  effect as when it was live. All of this then reiterates the
                  importance of how, as Marshal McLuhan said in his 2001 book{" "}
                  <cite>Understanding Media</cite>, the medium is the message
                  (McLuhan, 2001) – that is, without the medium of the internet,
                  the message of the artwork would not have come across in the
                  same way, and nor would it have been as impactful.
                </p>
                <p>
                  In conclusion, we can then see that through the example of
                  <cite>This Website Will Self Destruct</cite>, and its reliance
                  on multiple users and the internet, net art is more than just
                  traditional art on the internet and is in fact art that relies
                  on the unique characteristics of the internet to exist. This
                  then results in an exciting new medium for artistic practice
                  to take place, where any artist can display impactful new
                  works freely to as many people as possible – both now and in
                  the years to come.
                </p>
              </section>
            </article>
            <BlogReferences
              references={[
                {
                  referenceStart:
                    "Carrier, D. (2020). 'The Work of Art in the Age of the Internet', ",
                  referenceCite: <cite>Hyperallergic, </cite>,
                  referenceEnd:
                    "Available At: http://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/ (Accessed: 7 March 2022).",
                },
                {
                  referenceStart: "FemmeAndroid (2020). ",
                  referenceCite: <cite>This Website Will Self Destruct. </cite>,
                  referenceEnd:
                    "[Online] Available At: https://www.thiswebsitewillselfdestruct.com",
                },
                {
                  referenceStart:
                    "McLuhan, M., Fiore, Q., & Fairey, S. (2001). ",
                  referenceCite: <cite>Medium is the Massage (1st ed.). </cite>,
                  referenceEnd: "Gingko Press.",
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

Blog1.contextType = GlobalContext;
