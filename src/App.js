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
      <div className="h-full">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Blog" exact component={BlogPage} />
          <Route path="/ContactUs" exact component={ContactUs} />
          <Route path="/ShrinkCarousel" exact component={ShrinkCarousel} />
          <Route
            path="/ShrinkProfilePage"
            exact
            component={ShrinkProfilePage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
