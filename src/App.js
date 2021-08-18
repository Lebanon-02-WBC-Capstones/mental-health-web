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

function App() {
  return (
    <Router>
      <div className="h-full">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Blog" component={BlogPage} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/ShrinkCarousel" component={ShrinkCarousel} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-up-phsyciatrist" component={SignUpPhsyciatrist} />
          <Route path="/ShrinkProfilePage" component={ShrinkProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
