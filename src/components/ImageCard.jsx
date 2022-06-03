import React from "react";
import plus from "../resources/plus.png";

console.log(plus);

function ImageCard(prop)
{
    return (
        <img class="image-card-img" src={prop.img} alt="Product pic"></img>
    );
}

function BlankCard()
{
    return(
        <div class="add-prod-card">
            {/* <i class="fa-solid fa-plus"></i> */}
            <img className="add-prod-img" src={plus} alt="Add"/>
        </div>
        
    )
}

export default ImageCard;

export {BlankCard};