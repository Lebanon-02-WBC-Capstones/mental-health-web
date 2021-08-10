import "./App.css";
import Card from "./components/Card";
import React from "react";

// import LandingPage from "./landingpage.jsx";
import ShrinkCarousel from "./shrinkcarousel";
import LandingPage from "./landingpage.jsx";
import NavigationBar from "./components/NavigationBar";
import Blog from "./components/blog";
import Postfeed from "./components/Postfeed";

function App() {
  return (
    <div>
      {/* <LandingPage/>  */}
      <ShrinkCarousel />
      <NavigationBar mode="moderator" />
      <LandingPage />
      <Blog />
      <Postfeed />;
      <header className="App-header">
        <Card />
      </header>
    </div>
  );
}

export default App;
