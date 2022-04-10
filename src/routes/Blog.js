import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BlogPhoto from "../assets/HeroImage.jpg";
import BlogReferences from "../components/BlogReferences";
import Button from "../components/Button";
import Titles from "../components/Titles";

import "../styles/blog.css";

export default class Blog extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <article className="page-container">
          <article>
            <Titles mainTitle={true} title="Blog 1" subTitle={true} />
            <section className="blog-contents">
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
          <section className="blog-buttons">
            <Button buttonText="Previous Blog" buttonLink="" />
            <Button buttonText="Next Blog" buttonLink="" />
          </section>
        </article>
      </>
    );
  }
}
