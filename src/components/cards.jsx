import React from "react";

function Card (props){
    return(
            <div className="card">
                <h2>{props.name}</h2>
                <h5>{props.phone}</h5>
                <p >{props.email}</p>
            </div> 
    )
}

export default Card;