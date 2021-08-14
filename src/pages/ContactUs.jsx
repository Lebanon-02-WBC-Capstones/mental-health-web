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
      <div className="contactHeader bg-contact-us-header h-40 flex justify-center items-end w-full pt-8 shadow-md bg-contain bg-no-repeat">
        <h2 className="text-center pb-2">Contact Us</h2>
      </div>
      <div className="contactBody p-8">
        <p className="text-2xl text-center mt-0">
          Do you have a question, concern, idea, feedback, or problem? please
          fill out the form below and we would be happy to help!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="ml-8">
            <h4>Type Of Contact</h4> {" "}

            <input
              type="radio"
              id="question"
              name="contactType"
              value="question"
            />
             {" "}
            <label htmlFor="question" className="text-xl">I have a question about the service.</label>
            <br></br>
            <input
              type="radio"
              id="client-support"
              name="contactType"
              value="client-support"
            />
             {" "}
            <label htmlFor="client-support" className="text-xl">
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
            <label htmlFor="counselor-join" className="text-xl">
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
            <label htmlFor="counselor-support" className="text-xl">
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
            <label htmlFor="business-inquiry" className="text-xl">
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
            <label htmlFor="organization" className="text-xl">
              I am interested in BetterHelp for my organization.
            </label>
            <br></br>
            <input type="radio" id="billing" name="contactType" value="billing" />
              <label htmlFor="billing" className="text-xl">I have a billing related question.</label>
            <br></br>
          </div>
          <div className="input-fields">
            <div className="inputOne p-4 flex justify-center items-center">
              <label className="text-xl px-8">First Name:
                <input
                  className="border-1 border-black rounded px-8 py-2 ml-4"
                  type="text"
                  // value="firstName"
                  placeholder=""
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <label className="text-xl px-8">Last Name:
                <input
                className="border-1 border-black rounded px-8 py-2 ml-4"
                  type="text"
                  // value="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="inputTwo p-4 flex justify-center items-center">
              <label className="text-xl px-8">Email Address:
                <input
                  className="border-1 border-black rounded px-8 py-2 ml-4"
                  type="email"
                  // value="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="text-xl px-8">Message:
                <textarea
                  className="border-1 border-black rounded px-8 py-2 ml-4"
                  // value="message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="inputThree p-4 flex justify-center items-center">
              <input className="submitBtn bg-green-700 hover:bg-green-500 text-white rounded px-36 py-2" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default ContactUs;
