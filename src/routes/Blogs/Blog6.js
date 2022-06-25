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

//Photo Imports
import BlogPhoto from "../../assets/Blog6/BlogPicture.png";
import BlogPhotoTwo from "../../assets/Blog6/BlogPicture2.png";
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
import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

export default class Blog6 extends Component {
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
                  While creating an internet artwork may appear to be a
                  straightforward process on the surface; it actually requires a
                  great deal of planning, meaning making, and prototyping, to
                  achieve a worthwhile result. As such, in this blog post I aim
                  to evaluate the initial prototype artwork that I have created
                  for this assignment. To do this, I start by outlining what my
                  overall internet artwork idea is, the prototype I created, and
                  how it functions as a piece of internet art. Thereafter, I
                  look at some of the challenges I encountered during its
                  creation; before concluding with my overall thoughts on my
                  prototype and where I intend to take it in the future.
                </p>
                <p>
                  Firstly, we must start by having a good understanding of what
                  my overall idea is, and the themes I aim to explore through
                  it. As noted in my{" "}
                  <Link
                    to="/wsoa4175a_1894979/Blogs/Blog5/"
                    className="inline-link"
                  >
                    previous blog post
                  </Link>{" "}
                  , the goal for my internet artwork is to create a site that
                  highlights the increasingly dark design practice that is
                  present on many modern-day websites, practices we often ignore
                  as we have become extremely desensitized towards them. So, to
                  do this, I aim to use my entire website as a canvas for my
                  internet artwork; subverting the users preconceived,
                  desensitized, expectations by taking these bad practices and
                  pushing them to their extreme and mocking them, in an attempt
                  to bring awareness to their true intentions.
                </p>
                <p>
                  With that idea in place, I then began to explore various
                  different websites in order to understand where to start the
                  prototype for my idea; and while I came across multiple
                  different areas that I could have explore (touched on later in
                  this blog post), one in particular stood out to me the most,
                  as it is an area that has become normalized, but should not be
                  – cookie consent popups. To understand why these should not be
                  normalized, however, we must first understand what cookies
                  are. According to Kaspersky Antivirus, cookies are a small
                  piece of identifying information that is saved to your
                  browser, allowing information to be retained between browsing
                  sessions (Kaspersky, 2022). Although, while these may be
                  useful, with first party cookies from the website you are
                  visiting used to keep you logged in and remember your
                  preferences; they are often abused through third party
                  cookies, which are used to track your movement on the web –
                  serving you more accurate, and increasingly creepier,
                  advertisements in addition unwanted spam. As such, governments
                  around the world have begun implementing laws to combat this –
                  with one of the most prominent being the ePrivacy Directive
                  put in place by the EU in 2002, which requires websites to ask
                  for consent before using cookies. Although, while this may
                  appear to be a good idea on the surface, loose wording, and
                  very little enforcement, has led to it being grossly abused
                  and misused. In the law, it states that{" "}
                  <q>
                    the methods for giving information, offering a right to
                    refuse or requesting consent, should be made as
                    user-friendly as possible
                  </q>{" "}
                  (ePrivacy Directive, 2002); however, many websites have taken
                  this liberally, which has resulted in websites making use of
                  dark UI/UX patterns – which Arushi Jaiswal, in their article{" "}
                  <cite>Dark patterns in UX</cite> (2018), notes are deceptive
                  UI/UX interactions that are designed to mislead and trick
                  users – to make accepting cookie usage easy, but declining it
                  extremely difficult.
                </p>
                <p>
                  As such, for my prototype I focused on this idea of using dark
                  UI/UX patterns, alongside satirical phrasing, to bring
                  attention to the abusive nature of cookie consent law. To do
                  this, I started by placing a simple cookie consent banner at
                  the bottom of my website, purposefully adjusting the colours
                  of the buttons for ‘accept all’ and ‘update preferences’ to
                  make users perceive the ‘accept all’ button as the right
                  option – with the accept all button being an extremely bright,
                  and friendly, colour; as opposed to the dull, and slightly
                  opaque, colours of the ‘update preferences’ button. In
                  addition to this, the cookie consent banner also makes use of
                  more satirical, literal, information as to why the website
                  needs you to accept the cookies. This is then juxtaposed next
                  to the, often-vague, information claiming cookies provide an
                  enhanced user experience, with a line struck through the true
                  reason the developers want you to accept their cookies.
                  However, it is important to note that while crossed out text
                  usual signifies text that should not be read, by placing it in
                  a space that seldom has this, it actually stands out more and
                  users are more inclined to engage with it (see figure 1
                  below). Similarly, this same dark UI/UX pattern can also been
                  seen throughout the entire site – with the ‘adjust
                  preferences’ popup making use of the same crossed out text and
                  button colour schemes. In addition to this, I also take it a
                  step further – using an even more abusive, but still legal,
                  dark UI/UX pattern – placing a cookie wall at the front of the
                  website that requires users to disable cookie blockers if
                  enabled (see figure 2 below); as well as encouraging the user
                  to re-evaluate their cookie choices later if they did not
                  accept them all when first updating their cookie preferences.
                  These then act as a physical barrier to the user, putting a
                  major emphasis on how easily these cookie consent popups can
                  be abused, while still technically being legal, and why they
                  should not be normalized.
                </p>
                <BlogFigure
                  imageSource={BlogPhoto}
                  title="Screenshot of my website with cookies"
                  imageAlt="Screenshot of my website with cookies"
                  figureCaption="Figure 1: Screenshot of my websites cookie banner"
                />
                <BlogFigure
                  imageSource={BlogPhotoTwo}
                  title="Screenshot of my website with blocked cookies"
                  imageAlt="Screenshot of my website with blocked cookies"
                  figureCaption="Figure 2: Screenshot of my websites if cookies are blocked"
                />
                <p>
                  Next, with my prototype now outlined, we can then begin to
                  look at the problems that I encountered during the artwork’s
                  creation. While I assumed that creating an abusive cookie
                  consent banner would be quite simple, as it is commonly seen
                  in websites all over the internet, this was actually not the
                  case. While there were many packages for React that allowed
                  users to implement a cookie consent banner, most of them were
                  quite limiting and made creating an abusive popup extremely
                  challenging – showing how developers are purposefully going
                  out of their way to create abusive cookie consent banners to
                  deceive users. As such, I had to create my own from scratch,
                  learning how to work with cookies and persistent banners in
                  the process, which proved to be a bigger undertaking than
                  expect. Thus, I had to abandon an intended feature for this
                  prototype – a toggle in the footer to enable, reset, and
                  disable, my internet artwork. Although, as this was a
                  prototype, I found that dropping this feature for this version
                  of the internet artwork was not detrimental, and as of right
                  now the internet artwork can be reset by{" "}
                  <Link
                    to="/wsoa4175a_1894979/"
                    className="inline-link"
                    onClick={() => {
                      Cookies.remove("CookieConsent");
                      Cookies.remove("necessaryCookies");
                      Cookies.remove("functionalCookies");
                      Cookies.remove("performanceCookies");
                      // window.url("/wsoa4175a_1894979/");
                      toggleNetArt();
                    }}
                  >
                    clicking here.{" "}
                  </Link>{" "}
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
            <BlogReferences
              references={[
                {
                  referenceStart:
                    "Carrier, D. (2020). 'The Work of Art in the Age of the Internet', ",
                  referenceCite: <cite>Hyperallergic, </cite>,
                  referenceEnd:
                    "Available At: http://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/",
                },
                {
                  referenceStart: "ePrivacy Directive. (2002). ",
                  referenceCite: (
                    <cite>
                      Directive 2002/58/EC of the European Parliament and of the
                      Council.{" "}
                    </cite>
                  ),
                  referenceEnd:
                    "c. 25. Brussels: European Parliament and of the Council.",
                },
                {
                  referenceStart:
                    "Jaiswal, A. (2018). Dark patterns in UX: how designers should be responsible for their actions. ",
                  referenceCite: <cite>UX Design </cite>,
                  referenceEnd:
                    "Available at: https://uxdesign.cc/dark-patterns-in-ux-design-7009a83b233c",
                },
                {
                  referenceStart: "Kaspersky. (2022). ",
                  referenceCite: (
                    <cite>
                      What is a Cookie? How it works and ways to stay safe{" "}
                    </cite>
                  ),
                  referenceEnd:
                    "[Blog]. Availalble At: https://www.kaspersky.com/resource-center/definitions/cookies",
                },
              ]}
            />
            <BlogButtons type="Blog" />
          </article>
        </FadeIn>
      </>
    );
  }
}

Blog6.contextType = GlobalContext;
