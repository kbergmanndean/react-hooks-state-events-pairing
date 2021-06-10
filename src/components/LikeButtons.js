import React, {useState} from "react";

function LikeButtons({upvotes,downvotes}){

const [upvotesCount, setUpvotes]=useState(upvotes)
const [downvotesCount, setDownvotes]=useState(downvotes)

function handleUpvotes() {
    setUpvotes(upvotesCount+1)
}

function handleDownvotes() {
    setDownvotes(downvotesCount+1)
}


    return (
        <div>
        <button onClick={handleUpvotes}>Upvote {upvotesCount}</button>
        <button onClick={handleDownvotes}>Downvote {downvotesCount}</button>
        </div>
    )




}



export default LikeButtons