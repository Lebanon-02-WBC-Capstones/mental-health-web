import React, { createContext } from "react";
import Blogcontainer from "./components/Blogcontainer";
import Postfeed from "./components/Postfeed";
export const UserContext = createContext();

const userData = [{
  id: 1,
  profilePicture:
    "https://qph.fs.quoracdn.net/main-qimg-09f503c9ab605614ac40ea0dcca4d30a",
  username: "John Doe",
  desc: "loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad a ",
  post: "Love For All, Hatred For None.",
  
  likes: []
 
}];

export const StateProvider = () => {
  return (
    <UserContext.Provider value={userData}>
      <Blogcontainer></Blogcontainer>
      <Postfeed />
    </UserContext.Provider>
  );
};
// {
//   id: 2,
//   profilePicture:
//     "https://qph.fs.quoracdn.net/main-qimg-09f503c9ab605614ac40ea0dcca4d30a",
//   username: "Janell Shrum",
//   desc: "loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad a ",
// },
// {
//   id: 3,
//   profilePicture:
//     "https://qph.fs.quoracdn.net/main-qimg-09f503c9ab605614ac40ea0dcca4d30a",
//   username: "Alex Durden",
//   desc: "loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad a ",
// },
// );
// /

//  const recipeItem = {
//   title: "Kobe brian",
//   Specialist: "General Psychiatrist",

//   description:
//     "loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad aeklerden biri.  loren ipsum as jsa e edad rajsd jasd ahasd adsha sdadad .",
// };

// export const Posts =
// {
//   id: 1,
//   post: "Love For All, Hatred For None.",
//   photo:
//     "https://qph.fs.quoracdn.net/main-qimg-09f503c9ab605614ac40ea0dcca4d30a",
//   date: "5 mins ago",
//   userId: 1,
//   like: [2, 3],
//   comment: 9,
// };

// };
