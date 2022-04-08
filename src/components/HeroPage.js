import React, { Component } from "react";

//Style Imports
//import "../styles/heropage.css";

import Typist from "react-typist";

import ScrollText from "react-scroll-text";

import Typing from "react-typing-animation";

import FadeIn from "react-fade-in";

// ...

export default class HeroPage extends Component {
  render() {
    return (
      <>
        <section className="hero-typography">
          <header>
            {/*<h1>
              Everything <br /> wrong with the <br />
              internet today
            </h1>*/}
            {/* 
            
                        <ScrollText speed={100}>
              <h1>The Web Today</h1>
              <Typing speed={150} startDelay={-5}>
                <p>& Everything we find annoying</p>
              </Typing>
            </ScrollText>

            <img src={ImageSix} width="60px"></img>

            The Internet <br /> We Know Today

                            The Internet We've <br />
                Learnt To Live With
                
                                The Anti-News <br /> News Site


            */}
            <div>
              <h1>
                The Internet <br /> We Know Today
              </h1>
              <p>& the parts of it we choose to accept</p>
            </div>

            {/*<h1>The Internet Today</h1>
            <p>& Everything that is wrong with ßit</p> 
            
            & Everywhere it's gone wrong
            */}
          </header>
        </section>
      </>
    );
  }
}
