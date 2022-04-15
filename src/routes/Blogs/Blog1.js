import React, { Component } from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
import BlogPhoto from "../../assets/HeroImage.jpg";
import BlogReferences from "../../components/BlogReferences";
import Button from "../../components/Button";
import Titles from "../../components/Titles";

import "../../styles/blog.css";

//Importing Helper
import { BlogList } from "../../helpers/BlogList.js";
import { useLocation } from "react-router-dom";
import BlogButtons from "../../components/BlogButtons";

export default class Blog extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Blog 1</title>

          <meta property="og:title" content="Blog 1" />
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
            content="https://mikeparkinwits.github.io/wsoa4175a_1894979/Blogs/Blog1.html"
          />
          <meta
            property="og:image"
            content="https://mikeparkinwits.github.io/wsoa4175a_1894979/BlogPreviewImages/Blog1.jpg"
          />
          <meta
            property="og:image:alt"
            content="A picture of a pen lying on graph paper"
          />
          <meta
            name="description"
            property="og:description"
            content="This blog is about..."
          />

          {/*Google Structured Data can only be added inline as it is using JSON-LD - as noted in the w3 here: https://www.w3.org/TR/2016/REC-html51-20161101/semantics-scripting.html#the-script-element */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              name: "Blog 1",
              author: {
                "@type": "Person",
                name: "Michael Parkin",
              },
              url: "https://mikeparkinwits.github.io/wsoa4175a_1894979/Blogs/Blog1",
              headline: "Blog 1",
              image: [
                "https://mikeparkinwits.github.io/wsoa4175a_1894979/BlogPreviewImages/Blog1.jpg",
              ],
              datePublished: "2021-08-17",
            })}
          </script>
        </Helmet>
        <article className="page-container h-entry">
          <article>
            <Titles mainTitle={true} title="Blog 1" subTitle={true} />
            <section className="blog-contents e-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                odio veritatis ratione reiciendis repellat pariatur, saepe quos
                quibusdam quod delectus quo? Incidunt error pariatur asperiores
                mollitia sit ut. Voluptatem, dolores, porro minus sequi numquam
                repellat fuga, iste aliquid cum molestias qui distinctio impedit
                magnam alias! Vero natus tempora odit impedit?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                cum facilis aut fugiat minus ipsum id tempora repellat voluptate
                libero dolore ad accusamus hic perspiciatis praesentium nisi,
                nobis impedit facere maiores delectus quibusdam ut? Ab similique
                reprehenderit impedit saepe, suscipit error itaque odit repellat
                a velit et possimus iure sed totam ipsum eveniet ex commodi
                magni! Culpa unde magni minus voluptatum consectetur autem,
                consequatur veritatis quasi temporibus eligendi explicabo
                facilis. Ipsam quia totam modi, illum officiis voluptatem
                mollitia, odit velit, facere voluptatum error vero. Excepturi
                exercitationem, iste delectus dignissimos distinctio doloribus,
                quidem commodi quisquam ullam eum rerum aut laborum tempore?
              </p>
              <figure className="blog-figure">
                <img className="blog-image" src={BlogPhoto}></img>
                <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
              </figure>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                odio veritatis ratione reiciendis repellat pariatur, saepe quos
                quibusdam quod delectus quo? Incidunt error pariatur asperiores
                mollitia sit ut. Voluptatem, dolores, porro minus sequi numquam
                repellat fuga, iste aliquid cum molestias qui distinctio impedit
                magnam alias! Vero natus tempora odit impedit?
              </p>
            </section>
          </article>
          <BlogReferences />
          <BlogButtons />
        </article>
      </>
    );
  }
}
