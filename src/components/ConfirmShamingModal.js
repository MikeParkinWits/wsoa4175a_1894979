import React, { Component } from "react";

//Style Imports
import "../styles/cookies/cookieBlocked.css";

//Image Imports
import MailIcon from "../assets/MailIcon.svg";

//External Components
import ActionButton from "./buttons/ActionButton";

//Context Import
import GlobalContext from "../context/GlobalContext";

//External Package Imports
import emailjs from "@emailjs/browser"; //Emailjs package is used to send email, without backend, to emulate subscribing to mailing list - Documentation can be found here => https://www.emailjs.com/docs/

export default class RoachModal extends Component {
  componentDidMount() {
    const {
      blogsBeforeConfirmShameModal,
      decreaseblogsBeforeConfirmShameModal,
    } = this.context;

    //Decreases value a certain amount of times before confirm shaming modal is displayed
    if (blogsBeforeConfirmShameModal !== 0) {
      decreaseblogsBeforeConfirmShameModal();
    }
  }

  render() {
    const {
      showConfirmShameModal,
      showConfirmShameModalToggle,
      blogsBeforeConfirmShameModal,
      decreaseblogsBeforeConfirmShameModal,
      freeArticlesLeft,
      signedIn,
    } = this.context;

    //Function code required to send email to simulate the mailing list subscription, as per docs
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_v3uk2rq",
          "template_k38b0az",
          e.target,
          "7zFRa88WEHJv7f8Ni"
        )
        .then(
          (result) => {
            console.log(result.text);
            showConfirmShameModalToggle();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    //Checks that confirm modal is allowed and that no other modal is displayed

    if (
      showConfirmShameModal &&
      blogsBeforeConfirmShameModal === 0 &&
      freeArticlesLeft === 0 &&
      signedIn
    ) {
      return (
        <article className="modal-overlay">
          <section className="modal confirm-shame-modal">
            <img
              className="confirm-shame-modal-side-image"
              src={MailIcon}
              title={"Blocked Image"}
              alt={"Blocked Symbol"}
            ></img>
            <section className="confirm-shame-modal-contents">
              {" "}
              <header className="confirm-shame-modal-header">
                <h2>Join our Mailing List!</h2>
                <p className="confirm-shame-modal-subtext">
                  Sign up to our mailing list today, and{" "}
                  <span className="strike-through-text">
                    give us permission to send you unsolicited marketing emails
                  </span>{" "}
                  be the first to learn about exciting new topics on the web!
                </p>
              </header>
              <form className="confirm-shame-modal-form" onSubmit={sendEmail}>
                <label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    className="confirm-shame-modal-form-input"
                  />
                </label>
                <input
                  type="submit"
                  value="Submit"
                  className="confirm-shame-modal-form-button"
                />
              </form>
              <section className="button-container">
                {" "}
                <ActionButton
                  buttonText="No thanks, I don't want to be a front runner in web development"
                  buttonClass="confirm-shame-button"
                  onClickAction={showConfirmShameModalToggle}
                />{" "}
              </section>
            </section>
          </section>
        </article>
      );
    } else {
      return null;
    }
  }
}

RoachModal.contextType = GlobalContext;
