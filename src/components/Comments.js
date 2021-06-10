import React, {useState} from "react";

function Comments(props) {

    const [showComments, setShowComments]= useState(true)

    function handleComments(){
      setShowComments(!showComments)
      
    }

    const display= props.comments.map((commentObj)=>{
        return <li>{commentObj.comment}</li>
    })


    return(
        <div>
            <button onClick={handleComments}>{showComments ? "Hide Comments" : "Show Comments"} </button>
        <ul> 
            {showComments? display: ""}
        </ul>
        </div>
    )

}

export default Comments