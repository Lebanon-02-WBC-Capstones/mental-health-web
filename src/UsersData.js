import React, { createContext } from "react";
import Blogcontainer from "./components/Blogcontainer";
import Postfeed from "./components/Postfeed";
export const UserContext = createContext();

const userData = {
  id: 1,
  profilePicture:
    "https://qph.fs.quoracdn.net/main-qimg-09f503c9ab605614ac40ea0dcca4d30a",
  username: "John Doe",
  desc: "loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad a ",
  post: "Love For All, Hatred For None.",
  likes: [],
};

export const StateProvider = () => {
  return (
    <UserContext.Provider value={userData}>
      <Blogcontainer></Blogcontainer>
      <Postfeed />
    </UserContext.Provider>
  );
};
