import React from "react";

import { Helmet } from "react-helmet";

//import Header from "./header";
import Header from "../components/header";
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";

import "./contact_formular.css";

const ContactFormular = () => {
  return (
    <div className="contact-formular-container">
      <Helmet>
        <title>Contact_formular - OverlookedWomen</title>
        <meta
          property="og:title"
          content="Contact_formular - OverlookedWomen"
        />
      </Helmet>
      <Header></Header>

      <div className="contact-formular-container03">
        <div className="contact-formular-container07">
          <h2 className="contact-formular-text-title text2XL">
            <span>
              You found an error?
              <br /> You have something to add? <br /> You want to suggest
              someone?
            </span>
          </h2>
          <h3 className="contact-formular-text-title2">
            <span>
              Then please contact us. We are grateful for all the feedback we
              can get!
            </span>
          </h3>
          <div className="contact-formular-container-content">
            <span className="contact-formular-text-content textSM">
              You can reach us at the e-mail listed below. We will try to get
              back to you as soon as possible.
              <br />
              Please keep in mind, that this is a private project run by mainly
              one individual so please be patient.
            </span>
          </div>
          <div className="contact-formular-container08">
            <span className="contact-formular-text09 textSM">
              <span>
                Thank you for your interest in this project and keep learning
                about the women that shaped our history!
              </span>
            </span>
          </div>

          <div className="contact-formular-container12"></div>
          <span className="contact-formular-text-contact">
            <span>Contact us under:</span>
          </span>
          <a href="mailto:overlookedwomen@gmail.com">overlookedwomen@gmail</a>
        </div>
      </div>
    </div>
  );
};

export default ContactFormular;
