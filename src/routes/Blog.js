import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BlogPhoto from "../components/BlogPhoto";
import BlogReferences from "../components/BlogReferences";
import Titles from "../components/Titles";

export default class Blog extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <article>
          <Titles title="Blog 1" />
          <section>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              odio veritatis ratione reiciendis repellat pariatur, saepe quos
              quibusdam quod delectus quo? Incidunt error pariatur asperiores
              mollitia sit ut. Voluptatem, dolores, porro minus sequi numquam
              repellat fuga, iste aliquid cum molestias qui distinctio impedit
              magnam alias! Vero natus tempora odit impedit?
            </p>
            <BlogPhoto />
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
      </>
    );
  }
}
