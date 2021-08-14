import "./App.css";
import React from "react";
import LandingPage from "./pages/LandingPage.jsx";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import ShrinkCarousel from "./pages/ShrinkCarousel";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpPhsyciatrist from "./pages/SignUpPhysciatrist";
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
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-up-phsyciatrist" component={SignUpPhsyciatrist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
