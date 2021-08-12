import "./App.css";
import React from "react";
import LandingPage from "./pages/LandingPage.jsx";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import ShrinkCarousel from "./pages/ShrinkCarousel";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Blog" component={BlogPage} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/ShrinkCarousel" component={ShrinkCarousel} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
