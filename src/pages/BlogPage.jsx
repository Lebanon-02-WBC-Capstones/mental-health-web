import React from "react";
import Blogcontainer from "../components/Blogcontainer";
import Postfeed from "../components/Postfeed";
import Navbar from "../components/NavigationBar";

function BlogPage() {
  return (
    <div>
      <Navbar mode="user" />
      
      <Blogcontainer />
      <Postfeed />
    </div>
  );
}

export default BlogPage;
