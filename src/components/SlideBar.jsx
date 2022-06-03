import React from "react";

// document.getElementById("myinput").oninput = function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100
//     this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
//   };

export default function SlideBar()
{
    // document.getElementById("myinput").oninput = function() {
    //     var value = (this.value-this.min)/(this.max-this.min)*100
    //     this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
    // };
    
    return(
        // <div class="slidecontainer">
        //     <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        //     <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        // </div>
        <form class="multi-range-field my-5 pb-5">
            <p id="price-range-text">Price Range</p>
            <input id="multi6" class="multi-range" type="range" />
        </form>
        // <div class="chrome">
        //     <input id="myinput" min="0" max="60" type="range" value="30" />
        // </div>
    );
}