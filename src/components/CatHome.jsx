import React from "react";
import Card from "./Card";
import {Link} from "react-router-dom";

export default function CatHome() {
    return (

            <div>
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                
                    <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="SetUp"/>
                    
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                <Link to="/allCat">
                    <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="All Product"/>
                  </Link>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                <Link to="/allProd">
                    <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="All Catalogue"/>
                  </Link>
                </div>
              </div>
            </div>

    );
  }