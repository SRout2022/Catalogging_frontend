import React from "react";

export default function FilterButton(prop)
{
    return(
        // <button className="filter-buttons">
        //     <span class="button-text">Nike</span>
        // </button>
        <button type="button" class="filter-buttons btn btn-primary btn-sm" >{prop.title}</button>
    );
}