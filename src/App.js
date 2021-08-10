import "./App.css";
import React from "react";
import LandingPage from "./landingpage.jsx";
import NavigationBar from "./components/NavigationBar";
import Blog from "./components/blog";
import Postfeed from "./components/Postfeed";

function App() {
  return (
    <div>
      <NavigationBar mode="moderator" />
      <LandingPage />
      <Blog />
      <Postfeed />;
    </div>
  );
}

export default App;
