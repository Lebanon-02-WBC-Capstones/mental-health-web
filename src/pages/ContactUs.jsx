import React, { useState } from "react";
import "../ContactUs.css";
import Navbar from "../components/NavigationBar";

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactForm = { firstName, lastName, email, message };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const contactForm = {firstName, lastName, email, message};
    contactForm;
  };

  return (
    <>
      <Navbar mode="user" />
      <div className="contactHeader">
        <h2>Contact Us</h2>
      </div>
      <div className="contactBody">
        <p>
          Do you have a question, concern, idea, feedback, or problem? please
          fill out the form below and we would be happy to help!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h4>Type Of Contact</h4> {" "}
          <input
            type="radio"
            id="question"
            name="contactType"
            value="question"
          />
           {" "}
          <label htmlFor="question">I have a question about the service.</label>
          <br></br>
          <input
            type="radio"
            id="client-support"
            name="contactType"
            value="client-support"
          />
           {" "}
          <label htmlFor="client-support">
            I am a registered client and I need support.
          </label>
          <br></br>
          <input
            type="radio"
            id="counselor-join"
            name="contactType"
            value="counselor-join"
          />
           {" "}
          <label htmlFor="counselor-join">
            I am a counselor interested in joining.
          </label>
          <br></br>
          <input
            type="radio"
            id="counselor-support"
            name="contactType"
            value="counselor-support"
          />
           {" "}
          <label htmlFor="counselor-support">
            I am a registered counselor and I need support.
          </label>
          <br></br>
          <input
            type="radio"
            id="business-inquiry"
            name="contactType"
            value="business-inquiry"
          />
           {" "}
          <label htmlFor="business-inquiry">
            I have a business-related inquiry.
          </label>
          <br></br>
          <input
            type="radio"
            id="organization"
            name="contactType"
            value="organization"
          />
           {" "}
          <label htmlFor="organization">
            I am interested in BetterHelp for my organization.
          </label>
          <br></br>
          <input type="radio" id="billing" name="contactType" value="billing" />
            <label htmlFor="billing">I have a billing related question.</label>
          <br></br>
          <div className="input-fields">
            <div className="inputOne">
              <label>First Name:</label>
              <input
                type="text"
                value="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <label>Last Name:</label>
              <input
                type="text"
                value="lastName"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="inputTwo">
              <label>Email Address:</label>
              <input
                type="email"
                value="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Message:</label>
              <textarea
                value="message"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <input className="submitBtn" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
export default ContactUs;
