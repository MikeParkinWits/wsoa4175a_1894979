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

export default class Blog8 extends Component {
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
                  While at first it may appear that the purpose of my website is
                  only to display blog posts on topics relating to the internet,
                  such as internet justice and web design principles, its actual
                  purpose is far deeper than that – with the website itself
                  acting as its own internet artwork. So, in this blog post I
                  aim to explore the internet artwork that I have created for
                  this course, and the significance behind it. To do this, I
                  start by outlining the idea for my artwork, and the process
                  behind creating it. Thereafter, I reflect on this creation
                  process, looking at potential future improvements, and whether
                  I deem my artwork a success.
                </p>
                <p>
                  Firstly, before we can look at how I created my internet
                  artwork, we must start by having a firm understanding of what
                  I wanted to create. From its inception, the goal for my
                  artwork has been consistent – creating a website that exposes
                  users to the deceptive designs that developers have
                  increasingly begun employing on today’s websites. However,
                  instead of just being accessible through my website; I wanted
                  my artwork and the website to be one and the same, with the
                  site encompassing these deceptive designs in such a way that
                  users start to become actively aware of these elements and
                  start to question the developer’s true intentions with them.
                </p>
                <p>
                  With that in mind, we can then begin looking at the process
                  behind my final artwork’s creation and how I tried to achieve
                  this effect. After researching various deceptive designs, that
                  have become normalized on the web today, I started by using
                  one of the most commonly found to create a prototype for my
                  artwork – a cookie consent popup. As noted in my{" "}
                  <Link
                    to="/wsoa4175a_1894979/Blogs/Blog6/"
                    className="inline-link"
                  >
                    internet artwork prototype blog post{" "}
                  </Link>
                  , although cookie consent popups can have good intentions,
                  most of the time websites abuse them – featuring deceptive
                  designs that users have become desensitized to and no longer
                  question. As such, for my prototype I tried to subvert these
                  normalized, and desensitized, expectations by creating an
                  overly incessant, and multilayered, cookie consent popup which
                  uses satirical language to highlight its true nature and
                  intentions. So, while small, the cookie consent popup acted as
                  a necessary proof-of-concept for my artwork, providing a solid
                  foundation for me to build upon – with elements such as
                  satirical writing and overly incessant popups being a
                  recurring theme throughout the entirety of my internet
                  artwork.
                </p>
                <p>
                  Next, with my prototype complete I then looked at how I could
                  expand upon these ideas to better reach my desired goal, which
                  led to my next idea – utilizing forced continuity and action.
                  According to Dheeraj Khindri, in their 2021 article{" "}
                  <cite>
                    10 Common Dark Patterns in UX and How to Avoid Them
                  </cite>
                  , forced continuity and action is, for example, when{" "}
                  <q>
                    you need to enter your email to continue using a website or
                    an app
                  </q>{" "}
                  (Khindri, 2021) – such as <cite>The New York Times</cite>{" "}
                  (2022) requiring you to login just to read an article. So,
                  while many may be unfamiliar with the term, most have
                  experienced forced action in some shape or form on the
                  internet, becoming desensitized to it as a result. However,
                  when looking more closely at it, the question may arise as to
                  why websites even require you to login if something is free.
                  The answer: while the content is monetarily free, you are
                  paying for it with your personal data, and at the expense of
                  your own privacy – as websites are allowed to do with your
                  data as they please. So, for my internet artwork I decided to
                  create a popup that requires the user to login after they have
                  read just one blog post, acknowledging that they are providing
                  the website with their personal data, with no way to ignore
                  this request – similar to that of The New York Times forced
                  action (as seen in figure 1 below). However, through the
                  previously mentioned satirical phrasing and extremely abusive
                  appearance, the user is then made more aware of the
                  developer’s true intentions for including this artificial
                  limitation on the website. In addition to this, it is
                  important to note that the login/logout process for the
                  website also makes use of its own deceptive design, the roach
                  motel – which is a process whereby providing information is
                  easy, but relinquishing access to it is difficult (Khindri,
                  2021). So, while logging in only requires a single button
                  click, logging out presents an additional popup which tries to
                  persuade the user to not log out – utilizing the same button
                  colours and layout as the cookie banner, with no appearing as
                  the ‘correct’ option.
                </p>
                <BlogFigure
                  imageSource={BlogPhoto}
                  title="Screenshot of The New York Times forced continuity/action"
                  imageAlt="Screenshot of The New York Times forced continuity/action"
                  figureCaption="Figure 1: Screenshot of The New York Times forced continuity/action"
                />
                <p>
                  Thereafter, I looked to the next normalized aspect of websites
                  that I wanted to shed light on through my internet artwork –
                  web notifications. While their introduction to the web was
                  logical and useful, providing users with relevant information
                  without having to constantly check the site, they quickly
                  began to be misused because of their loose permission
                  principles and ability to draw users attention – such as
                  through advertisements and spam content at any time. As a
                  result, many people accept them assuming they will enhance
                  their experience, unaware of how to block them later once they
                  are no longer beneficial and misused. So, for my website I
                  designed push notifications which are sent frequently
                  throughout while viewing the site, with the goal of
                  distracting users whilst they read blog posts – taking the
                  types of ad and spams that normally get sent through browser
                  notifications, making them appear more frequently and being
                  extremely satirical (as seen in figure 2 below). However, I
                  quickly ran into an issue while creating this aspect of the
                  internet artwork. With notification spam becoming a big issue
                  in recent years, not only do less people accept push
                  notifications; but browsers, and operating systems, have begun
                  giving the user the option to block all notifications system
                  wide. As such, this could make my internet artwork less
                  effective – with no way to alter this from the website. So, to
                  counter this I made it so that if the user has blocked
                  notifications, or does not accept push notifications, an
                  in-browser notification appears to still make the push
                  notifications abuse noticeable.
                </p>
                <BlogFigure
                  imageSource={BlogPhoto2}
                  title="Screenshot of my website notifications"
                  imageAlt="Screenshot of my website notifications"
                  figureCaption="Figure 2: Screenshot of my websites notifications"
                />
                <p>
                  Although, while I had intended to stop my net art with those
                  three areas, I soon realized that my net art did not affect
                  the users experience of the entire website – as most of the
                  net art only appeared at the very beginning of a user’s
                  journey on my site. As such, I implemented one final deceptive
                  design, confirm shamming – which is the process of using
                  emotional manipulation to make a user signup for something or
                  provide personal information (ibid.). In the case of my
                  website, midway through the site the user is prompted to join
                  the websites mailing list. Not only is this artificial gateway
                  placed on the user’s experience, but by using confirm shaming,
                  the option for no is turned into “no thanks, I don't want to
                  be a front runner in web development” – shaming the user into
                  subscribing to the websites mailing list. However, unlike
                  traditional confirm shaming, on subscribing the user is
                  emailed to inform them about confirm shaming and to teach them
                  about these tactics so that they can be more aware.
                </p>
                <p>
                  Lastly, with all of the features of my internet artwork now in
                  place, I included one simple, yet extremely effective, final
                  piece to it – the ability to toggle the internet artwork on
                  and off using a button in the footer of the website. While
                  this may seem unnecessary to some, granting the user the
                  ability to disable the internet artwork is vital – as it
                  allows the user to experience the website without any
                  distractions, making it clear just how badly deceptive design
                  tactics impact a websites usability and experience.
                  Ultimately, this option then helps to highlight the importance
                  of becoming re-sensitized to these deceptive design principles
                  across the web, and brings us one step closer to outlawing
                  them as a collective.
                </p>
                <p>
                  So, in conclusion, I am happy with the net art that I was able
                  to create, and believe that I was successfully able to achieve
                  my goal of re-sensitizing users to aspects of the web that had
                  become normalized, but should not have been – with every
                  decision made while creating this internet artwork extremely
                  deliberate. However, even though I am happy with how the
                  artwork turned out, and see it as a success, there were still
                  areas where I felt it could have been improved. Firstly, I
                  found that my implementation of a notification system did not
                  meet my overall expectations and was not as effective as I
                  expected – as it turns out companies have been putting
                  external measures in place to reduce notification spamming.
                  While unfortunate for my internet artwork, it shows how
                  companies are slowly becoming more aware of these deceptive
                  design principles and are trying to stop them, which
                  ultimately aligns with the goal of my internet artwork.
                  Secondly, I had also hoped to implement incorporate invasive
                  advertisements that blocked large portions of the screen, as
                  is commonly seen on many news sites, but found that I was
                  unable to add this functionality as Google AdSense cannot
                  verify websites published on GitHub pages and as such it was
                  not possible for my internet artwork.{" "}
                </p>
              </section>
            </article>
            <BlogReferences
              references={[
                {
                  referenceStart:
                    "Khindri, D. (2021). 10 Common Dark Patterns in UX and How to Avoid Them, ",
                  referenceCite: <cite>Net Solutions, </cite>,
                  referenceEnd:
                    "Available At: https://www.netsolutions.com/insights/dark-patterns-in-ux-disadvantages/#:~:text=intend%20to%20take.-,3.,the%20common%20dark%20UX%20examples.",
                },
                {
                  referenceStart: "The New York Times Company (2022). ",
                  referenceCite: <cite>The New York Times. </cite>,
                  referenceEnd:
                    "[Online] Available At: https://www.nytimes.com/international/",
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

Blog8.contextType = GlobalContext;
