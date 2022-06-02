import React, { Component } from "react";

//Routing Imports
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import BlogSection from "./routes/BlogSection";
import DesignSection from "./routes/DesignSection";
import ArtworkSection from "./routes/ArtworkSection";
import Blog1 from "./routes/Blogs/Blog1";
import Blog2 from "./routes/Blogs/Blog2";
import Blog3 from "./routes/Blogs/Blog3";
import Blog4 from "./routes/Blogs/Blog4";
import Blog5 from "./routes/Blogs/Blog5";
import Design1 from "./routes/Design/Design1";
import Design2 from "./routes/Design/Design2";

//Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX, faXmark } from "@fortawesome/free-solid-svg-icons";

//Style Imports
import "./styles/main.css";
import "./styles/cookieBanner.css";

//Component Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookiePopup from "./components/CookiePopup";
import CookieBlocked from "./components/CookieBlocked";

//External Packages
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet
import CookieConsent from "react-cookie-consent"; //External Package used to load template cookie banner - Documentation can be found here => https://www.npmjs.com/package/react-cookie-consent?activeTab=versions
import Cookies from "js-cookie"; //External Package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie

library.add(faBars, faX, faXmark);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCookiePopup: false,
    };

    this.switchCookieState = this.switchCookieState.bind(this);
    this.acceptClick = this.acceptClick.bind(this);
  }

  switchCookieState() {
    this.setState({ showCookiePopup: !this.state.showCookiePopup });
  }

  acceptClick() {
    Cookies.set("functionalCookies", true);
    Cookies.set("performanceCookies", true);
    Cookies.set("necessaryCookies", true);
  }

  render() {
    const { showCookiePopup } = this.state;

    return (
      <>
        {/* React Helmet is used to dynamically adjust the head of the document and add meta data */}
        <Helmet>
          <meta
            name="keywords"
            content="Internet, Net Art, Internet Art, Design"
          />
          <meta property="og:site_name" content="The Internet We Know" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://mikeparkinwits.github.io/wsoa4175a_1894979/Images/Mini_Logo.svg"
          />
          <meta property="og:image:alt" content="The Internet We Know Logo" />
          <meta
            property="og:description"
            content="The Internet We Know is a website about the internet that critiques the internet we know today"
          />
        </Helmet>
        <Navbar />
        <main>
          <Routes>
            <Route path="/wsoa4175a_1894979/" element={<Home />} />
            <Route
              path="/wsoa4175a_1894979/BlogSection/"
              element={<BlogSection />}
            />
            <Route
              path="/wsoa4175a_1894979/DesignSection/"
              element={<DesignSection />}
            />
            <Route
              path="/wsoa4175a_1894979/ArtworkSection/"
              element={<ArtworkSection />}
            />

            {/* Blog Routes*/}
            <Route path="/wsoa4175a_1894979/Blogs/Blog1/" element={<Blog1 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog2/" element={<Blog2 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog3/" element={<Blog3 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog4/" element={<Blog4 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog5/" element={<Blog5 />} />

            {/* Design Routes*/}
            <Route
              path="/wsoa4175a_1894979/Design/Design1/"
              element={<Design1 />}
            />
            <Route
              path="/wsoa4175a_1894979/Design/Design2/"
              element={<Design2 />}
            />
          </Routes>
        </main>

        {!navigator.cookieEnabled ? (
          <CookieBlocked />
        ) : (
          <CookieConsent
            enableDeclineButton
            debug="true"
            overlay="true"
            location="bottom"
            containerClasses="cookie-banner-container"
            buttonWrapperClasses="cookie-banner-button-container"
            contentClasses="cookie-banner-contents"
            declineButtonClasses="cookie-banner-decline-button"
            buttonClasses="cookie-banner-accept-button"
            overlayClasses="cookie-banner-overlay"
            disableStyles="true"
            declineButtonText="Update Preferences"
            buttonText="Accept All Cookies"
            onDecline={this.switchCookieState}
            onAccept={this.acceptClick}
          >
            This website uses cookies to{" "}
            <span className="strike-through-text">
              monitor your activity and track you on the internet
            </span>{" "}
            enhance the user experience.
          </CookieConsent>
        )}

        <CookiePopup
          showCookiePopup={showCookiePopup}
          onCookieSwitch={this.switchCookieState}
        />
        <Footer />
      </>
    );
  }
}

export default App;
