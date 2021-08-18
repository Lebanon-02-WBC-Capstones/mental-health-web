import "./App.css";
import React from "react";
import LandingPage from "./pages/LandingPage.jsx";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import ShrinkCarousel from "./pages/ShrinkCarousel";
import ShrinkProfilePage from "./pages/ShrinkProfilePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/shrink-carousel" exact component={ShrinkCarousel} />
          <Route path="/shrink-profile-page" exact component={ShrinkProfilePage} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-up-phsyciatrist" component={SignUpPhsyciatrist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
