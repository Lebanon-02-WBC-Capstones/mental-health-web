import React from "react";
import Blog from "../components/blog";
import Postfeed from "../components/Postfeed";
import Navbar from "../components/NavigationBar";

function BlogPage() {
  return (
    <div>
      <Navbar mode="user" />
      <Blog />
      <Postfeed />
    </div>
  );
}

export default BlogPage;
