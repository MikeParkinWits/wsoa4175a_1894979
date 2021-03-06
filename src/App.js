import React, { Component } from "react";

//Context Imports
import GlobalContext, { GlobalContextProvider } from "./context/GlobalContext";

//Routing Imports
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import BlogSection from "./routes/BlogSection";
import DesignSection from "./routes/DesignSection";
import Blog1 from "./routes/Blogs/Blog1";
import Blog2 from "./routes/Blogs/Blog2";
import Blog3 from "./routes/Blogs/Blog3";
import Blog4 from "./routes/Blogs/Blog4";
import Blog5 from "./routes/Blogs/Blog5";
import Blog6 from "./routes/Blogs/Blog6";
import Blog7 from "./routes/Blogs/Blog7";
import Blog8 from "./routes/Blogs/Blog8";
import Blog9 from "./routes/Blogs/Blog9";
import Design1 from "./routes/Design/Design1";
import Design2 from "./routes/Design/Design2";
import Design3 from "./routes/Design/Design3";

//Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faX,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

//Style Imports
import "./styles/main.css";
import "./styles/cookies/cookieBanner.css";

//Component Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookiePopup from "./components/cookies/CookiePopup";
import CookieBlocked from "./components/cookies/CookieBlocked";
import CookieBanner from "./components/cookies/CookieBanner";
import ConfirmationModal from "./components/login/ConfirmationModal";

//External Packages
import Helmet from "react-helmet"; //External package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet
import Cookies from "js-cookie"; //External package used to edit cookie information in browser - Documentation can be found here => https://www.npmjs.com/package/js-cookie
import { gapi } from "gapi-script"; //External package used to link Google Login - Documentation can be found here => https://www.npmjs.com/package/gapi-script
import { Notifications } from "react-push-notification"; //External package used for native, and in-broswer, notification - Documentation can be found here => https://www.npmjs.com/package/react-push-notification

library.add(faBars, faX, faXmark, faUser);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCookiePopup: false,
      showSecondPopup: false,
    };

    this.switchFirstCookiePopupState =
      this.switchFirstCookiePopupState.bind(this);

    this.switchSecondPopupCookiesState =
      this.switchSecondPopupCookiesState.bind(this);

    this.acceptClick = this.acceptClick.bind(this);
  }

  //Sets all cookies to true on clicking accept button, and disables second cookie window (where necessary), across popup & banner components
  acceptClick() {
    Cookies.set("functionalCookie", true);
    Cookies.set("performanceCookie", true);
    Cookies.set("necessaryCookie", true);

    Cookies.set("CookiesConsent", true);
  }

  //Callback that displays cookie settings window when clicking 'update preferences' button
  switchFirstCookiePopupState() {
    this.setState({ showCookiePopup: !this.state.showCookiePopup });
  }

  //Callback function that displays the second, more annoying, cookie settings window that appears later in the website
  switchSecondPopupCookiesState() {
    this.setState({ showSecondPopup: !this.state.showSecondPopup });
  }

  componentDidMount() {
    const { toggleNetArt } = this.context;

    toggleNetArt();
  }

  render() {
    const { showCookiePopup, showSecondPopup } = this.state;

    const { showNetArt } = this.context;

    //Used to link project to Google oAuth2 Login
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId:
          "438147070218-ntafm247ii9dm17lgo110daid1rbb4kv.apps.googleusercontent.com",
        plugin_name: "chat",
      });
    });

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

        <Notifications position="top-right" />

        <Navbar />
        <main>
          <Routes>
            <Route
              path="/wsoa4175a_1894979/"
              element={
                <Home
                  secondPopupSwitcher={this.switchSecondPopupCookiesState}
                />
              }
            />
            <Route
              path="/wsoa4175a_1894979/BlogSection/"
              element={<BlogSection />}
            />
            <Route
              path="/wsoa4175a_1894979/DesignSection/"
              element={<DesignSection />}
            />

            {/* Blog Routes*/}
            <Route path="/wsoa4175a_1894979/Blogs/Blog1/" element={<Blog1 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog2/" element={<Blog2 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog3/" element={<Blog3 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog4/" element={<Blog4 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog5/" element={<Blog5 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog6/" element={<Blog6 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog7/" element={<Blog7 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog8/" element={<Blog8 />} />
            <Route path="/wsoa4175a_1894979/Blogs/Blog9/" element={<Blog9 />} />

            {/* Design Routes*/}
            <Route
              path="/wsoa4175a_1894979/Design/Design1/"
              element={<Design1 />}
            />
            <Route
              path="/wsoa4175a_1894979/Design/Design2/"
              element={<Design2 />}
            />
            <Route
              path="/wsoa4175a_1894979/Design/Design3/"
              element={<Design3 />}
            />
          </Routes>
        </main>

        {
          //Cookie banners & popups are in App.js as they are intended to overlap any page of the site

          showNetArt && (
            <>
              {
                //Checking if cookies are blocked
                !navigator.cookieEnabled ? (
                  <CookieBlocked />
                ) : (
                  <CookieBanner
                    onPreferences={this.switchFirstCookiePopupState}
                    onPopupAccept={this.acceptClick}
                  />
                )
              }

              <CookiePopup
                showCookiePopup={showCookiePopup}
                onCookieSwitch={this.switchFirstCookiePopupState}
                isPopupSubtext="false"
                onAcceptButton={this.acceptClick}
              />

              <CookiePopup
                showCookiePopup={showSecondPopup}
                onCookieSwitch={this.switchSecondPopupCookiesState}
                isPopupSubtext="true"
                onAcceptButton={this.acceptClick}
                popupSubtext={
                  <>
                    Are you sure you don't want to enable all cookies to{" "}
                    <span className="strike-through-text">
                      let us profit off your data
                    </span>{" "}
                    better our product and your experience?
                  </>
                }
              />

              <ConfirmationModal />
            </>
          )
        }

        <Footer />
      </>
    );
  }
}

App.contextType = GlobalContext;

export default App;
