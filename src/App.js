import React from "react";
import LandingPage from "./pages/LandingPage.jsx";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import ShrinkCarousel from "./pages/ShrinkCarousel";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpPhsyciatrist from "./pages/SignUpPhysciatrist";
import ShrinkProfilePage from "./pages/ShrinkProfilePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="h-full">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/shrink-carousel" exact component={ShrinkCarousel} />
          <Route
            path="/shrink-profile-page"
            exact
            component={ShrinkProfilePage}
          />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-up-psychiatrist" component={SignUpPhsyciatrist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
