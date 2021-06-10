import React, {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments";
import Videodata from "./Videodata";
import LikeButtons from "./LikeButtons";


function App() {

  console.log("Here's your data:", video);
  console.log(video.comments)

  return (
    <div className="App">
      <Videodata title={video.title} embedUrl={video.embedUrl} views={video.views} createdAt={video.createdAt}/>
      <Comments comments={video.comments}/>
      <LikeButtons upvotes={video.upvotes} downvotes={video.downvotes}/>
    </div>
  );
}

export default App;
