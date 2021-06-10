import React from "react";

function Videodata(props){

return( 
    <div>
        <h1>{props.title}</h1>
        <iframe
        width="919"
        height="525"
        src={props.embedUrl}
        frameborder="0"
        allowfullscreen
        />
        <span>views: {props.views}</span>
        <span> | {props.createdAt}</span>

    </div>

)
}


export default Videodata