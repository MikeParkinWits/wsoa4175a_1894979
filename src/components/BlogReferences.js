import React, { Component } from "react";

//Importing Style Components
import "../styles/blogReferences.css";

//Importing Components
import Titles from "./Titles";

export default class BlogReferences extends Component {
  static defaultProps = {
    references: [
      {
        referenceStart:
          "Diakopoulos, N., 2018. Ethics in Data-Driven Visual Storytelling, in: Riche, N.H., Hurter, C., Diakopoulos, N., Carpendale, S. (Eds.), ",
        referenceCite: <cite>Data-Driven Storytelling. </cite>,
        referenceEnd:
          " A K Peters/CRC Press, Boca Raton, Florida : Taylor &amp; Francis/CRC Press, [2018], pp. 233–248. https://doi.org/10.1201 /9781315 281575-10",
      },
    ],
  };

  render() {
    return (
      <>
        <footer>
          <Titles title="References" mainTitle={false} />
          <section className="blog-references">
            <ol className="blog-list">
              {this.props.references.map((blogItem, value) => {
                return (
                  <li>
                    {blogItem.referenceStart}
                    {blogItem.referenceCite}
                    {blogItem.referenceEnd}
                  </li>
                );
              })}
            </ol>
          </section>
        </footer>
      </>
    );
  }
}
