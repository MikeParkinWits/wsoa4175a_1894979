import React, { Component } from "react";

//Style Imports
import "../styles/cookies/cookieBlocked.css";

//Image Imports
import MailIcon from "../assets/MailIcon.svg";
import ActionButton from "./buttons/ActionButton";

import emailjs from "@emailjs/browser";
import GlobalContext from "../context/GlobalContext";

export default class RoachModal extends Component {
  componentDidMount() {
    const { blogsBeforeRoachModal, decreaseBlogsBeforeRoachModal } =
      this.context;

    if (blogsBeforeRoachModal !== 0) {
      decreaseBlogsBeforeRoachModal();
    }
  }

  render() {
    const {
      showRoachModal,
      showRoachModalToggle,
      blogsBeforeRoachModal,
      decreaseBlogsBeforeRoachModal,
    } = this.context;

    //Function code required to send email to simulate the mailing list subscription
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
            showRoachModalToggle();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    if (showRoachModal && blogsBeforeRoachModal === 0) {
      {
        console.log("H12");
      }

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
                  onClickAction={showRoachModalToggle}
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
