import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import Blog from "./components/blog";
import Postfeed from "./components/Postfeed";

function App() {
  return (
    <div>
      <NavigationBar mode="moderator" />
      <Blog />
      <Postfeed />;
    </div>
  );
}

export default App;
