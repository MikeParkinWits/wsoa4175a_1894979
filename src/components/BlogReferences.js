import React, { Component } from "react";

import "../styles/blogReferences.css";
import Titles from "./Titles";

export default class BlogReferences extends Component {
  render() {
    return (
      <>
        <footer>
          <Titles title="References" mainTitle={false} />
          <section className="blog-references">
            <ol className="blog-list">
              <li>
                Diakopoulos, N., 2018. Ethics in Data-Driven Visual
                Storytelling, in: Riche, N.H., Hurter, C., Diakopoulos, N.,
                Carpendale, S. (Eds.),
                <cite>Data-Driven Storytelling.</cite> A K Peters/CRC Press,
                Boca Raton, Florida : Taylor &amp; Francis/CRC Press, [2018],
                pp. 233–248. https://doi.org/10.1201 /9781315 281575-10
              </li>
              <li>1</li>
              <li>1</li>
            </ol>
          </section>
        </footer>
      </>
    );
  }
}
