import React from "react";
import CatHome2 from "./CatHome2";

function Card(prop)
{
    return (
        <div class="card" onClick={() => {return {CatHome2}}}>
            <img class="card-img-top" src={prop.img} alt="Card cap" />
            <div class="card-body">
                <p class="card-text">{prop.content}</p>
            </div>
        </div>
    );
}

export default Card;