import "./style.css";
import React from "react";

function LandingPage() {
  return (
    <div className="landing-page">
      <div>
        <img className="landing-image"
          src="https://cdn.pixabay.com/photo/2016/11/28/21/20/happiness-1866081_960_720.jpg" alt="landing-page image"
        />
        <div className="transparent-backg">
          <span className="logo">Cerebra</span>
          <div className="container">
            <img
              className="brain-icon"
              src="https://icon-library.com/images/brain-icon-png/brain-icon-png-23.jpg" alt="brain-icon"
            />
            <p className="work-font"><b>YOUR MENTAL HEALTH <br></br> &emsp; IS IMPORTANT.</b></p>
            <p className="centred-text"><b>&emsp;  &ensp; KNOW <br></br> WHAT WORKS<br></br>&emsp; FOR YOU.</b></p>
            <p className="work-font">Meditation can help, but it is not the <br></br>&emsp; &emsp; &emsp; &ensp; only solution.</p>
            <p className="line"></p>
            <p className="work-font"><b>Know your option and take care of yourself.</b></p>
            <button className="join-button">Join our community</button>
          </div>
        </div>
      </div>
        <div className="quote-background">
          <div className="quote-border">
            <p className="quote">
            Maybe we all have darkness inside of us and some of us are better at dealing with it than others.
             </p>
            <p className="quote-author">JASMINE WARGA.</p>
          </div>
        </div>
    </div>
  );
}

export default LandingPage;
