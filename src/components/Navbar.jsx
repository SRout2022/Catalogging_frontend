import React from "react";
import {ExtendedButton,SmallButton} from "./Buttons";

function Navbar(prop)
{
    if(prop.screen === 6)
        return (
            <div class="shadow p-3 mb-5 bg-white rounded">
                <div class="navbar-title">
                    {prop.title}
                    
                    <span class = "nav-button-1" style={{visibility:"hidden"}}>
                            <ExtendedButton content="Monitor Upload Status"/>
                        </span>

                    <span class = "nav-button-2">
                        <SmallButton content="SetUp"/>
                    </span>
                </div>
            </div>
        );
    
    else
        return (
            <div class="shadow p-3 mb-5 bg-white rounded">
                <div class="navbar-title">
                    {prop.title}
                    
                        <span class = "nav-button-1">
                            <ExtendedButton content="Monitor Upload Status"/>
                        </span>

                        <span class = "nav-button-2">
                            <SmallButton content="SetUp"/>
                        </span>
                    
                </div>
            </div>
        );
}

export default Navbar;