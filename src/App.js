import "./App.css";
import React from "react";
import LandingPage from "./pages/LandingPage.jsx";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import ShrinkCarousel from "./pages/ShrinkCarousel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider } from "./UsersData";
 
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <StateProvider>
            <Route path="/Blog" exact component={BlogPage} />
          </StateProvider>
          <Route path="/ContactUs" exact component={ContactUs} />
          <Route path="/ShrinkCarousel" exact component={ShrinkCarousel} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
