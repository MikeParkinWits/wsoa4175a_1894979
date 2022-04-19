import React, { Component } from "react";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { BlogList } from "../../helpers/BlogList";

//Photo Imports
import BlogPhoto from "../../assets/Blog2/BlogPicture.png";

//Component Imports
import Titles from "../../components/Titles";
import BlogReferences from "../../components/BlogReferences";
import BlogButtons from "../../components/BlogButtons";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet
import { Link } from "react-router-dom";

export default class Blog4 extends Component {
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
                  Although creating a website may seem like a simple task to the
                  end-user, it is actually an extremely rigorous, and involved,
                  process with various factors to consider – such as skillset,
                  site context, and more. As such, in this blog post I aim to
                  provide a reflection on my websites creation, and progress,
                  thus far – focusing specifically on the technical, and
                  theoretical, aspects of the site. To go about this, I start by
                  exploring how I created my website from a technical
                  perspective – looking at my goals, and the hurdles I had to
                  overcome, for this assignment. Thereafter, I reflect on my
                  theoretical engagement for the site, and whether I was happy
                  with what I wrote or not. Lastly, I then conclude by looking
                  at whether I was happy overall with my submission for
                  assignment one.
                </p>
                <p>
                  Firstly, we can start by looking at the technical progress of
                  my website, and the goals I set for myself. As I was
                  unfamiliar with the ReactJS framework – having only worked
                  with vanilla JavaScript, HTML, and CSS for web creation – I
                  wanted to start my development by researching three things:
                  what ReactJS is, other websites that use it, and basic
                  tutorials to understand how it works. Upon completing this,
                  and having a good grasp of what ReactJS is capable of, I then
                  began outlining where I wanted my website to be, from a
                  technical perspective, for assignment one. Firstly, I wanted
                  to make sure that, just because I was using a new framework, I
                  did not ignore the fundamentals that all good, modern,
                  websites should have – such as good semantic markup,
                  responsive design, reusable JavaScript, and good metadata –
                  and thus this became my first set of goals for the website.
                  Secondly, I knew that I wanted my website to make use of only
                  the best ReactJS conventions – which include the correct use
                  of props & states, reusable components where necessary, good
                  file structure, and client-side routing. So, with these goals
                  in mind, and my wireframes and design complete (which is
                  explored in more detail{" "}
                  <Link
                    to="/wsoa4175a_1894979/DesignSection/"
                    className="inline-link"
                  >
                    here
                  </Link>
                  ), I then began to build my website – starting with the
                  boilerplate code, building upon the site piece-by-piece, until
                  I landed on my submission for assignment 1.
                </p>
                <p>
                  Although, the development process was not all straightforward,
                  as I did encounter quite a few roadblocks, as expected when
                  learning any new framework. For example, one aspect that I
                  struggled with was getting my sites metadata to update
                  dynamically alongside page routing. To achieve this, I found a
                  React package called react-helmet that allows you to update
                  the head of the document dynamically alongside react-router.
                  But, while this did update the metadata in the head correctly,
                  I quickly realized that the metadata for the Open Graph
                  Protocol, and Google Structured Data, was not actually being
                  parsed correctly – as the parsing systems are run before
                  JavaScript is loaded, meaning that react-helmet would not yet
                  have updated the information. As such, I implemented an
                  additional package called react-snap which creates static
                  versions of each link on the deployed site, allowing metadata
                  to be read at runtime without the need for JavaScript. Thus,
                  by building with my goals in mind, I am quite happy with how
                  the site turned out – achieving everything I set out to
                  achieve from a technical perspective, while also tackling
                  unexpected problems along the way through the use of the
                  ReactJS framework and library.
                </p>
                <p>
                  Next, we can explore my theoretical engagement. As each blog
                  post left room for exploration, I started each by going
                  through all the lectures, and reading material, to get a sense
                  of both what the topic was about and what I wanted to write
                  on; before choosing a specific aspect to focus on. Thereafter,
                  I explored additional readings and blog posts on the topic, to
                  see what various professionals were saying. With that, I then
                  began writing each blog post – synthesizing the information as
                  best I could, while simultaneously providing my own reflection
                  on the information where possible. Through this process, I
                  then believe that I was able to provide a series of well
                  written blog posts, each with a cohesive argument.
                </p>
                <p>
                  In conclusion, I can then say that because I met, and even
                  exceeded, my goals for the technical aspect of the website;
                  and spent time engaging beyond the course work for my blogs,
                  that I am extremely happy with how my assignment one
                  submission turned out. However, even with this there are still
                  things I was unable to achieve due to time and will improve
                  for my next assignment. On the technical side I was unable to
                  implement dynamic routing for my blogs, which would create
                  more reusable code and streamline the process of adding blogs.
                  On the theoretical side, I felt I lacked in my reflections; as
                  well as missing out on writing additional, bonus, blog posts –
                  as I was focused on making the required blog posts as good as
                  possible.
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
