import "./App.css";
import React from "react";
import NavBar from "./Components/NavigationBar";
// import ChatBox from "./Components/ChatBox";
import {Launcher} from "react-chat-window";

function App() {
    return (
      <div>
        <NavBar mode="user"/>
        <Launcher
        agentProfile={{
          teamName: "Chat Room",
          imageUrl: "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"
        }}
        onMessageWasSent={"send a message"}
        messageList={[{author: "hehe",type: "text",data: {text: "blabla"}}]} showEmoji
      />
      </div>
    );
}

export default App;
