import React from "react";
import FilterButton from "./FilterButton";
import SlideBar from "./SlideBar";

export default function FilterCard()
{
    return (
        <div id="block2" class="filter-card">
            <div class="filter-title">
                <h3 id="filter-word">Filter <span id="reset">Reset</span></h3>
            </div>
            <div id="filter-content">
                <div class="first">
                    <span>Category</span>
                    <i class="arrow-right-1 fa-solid fa-chevron-right"></i>
                </div>

                <div class="second">
                    <span>Brand<i class="arrow-right-2 fa-solid fa-chevron-right"></i></span>
                </div>

                <div id="button-sec">
                    <div class="filter-brand-buttons row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <FilterButton title="Nike"/>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <FilterButton title="Adidas"/>
                        </div>
                    </div>
                    <div class="filter-brand-buttons row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <FilterButton title="HRX"/>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <FilterButton  title="Zara"/>
                        </div>
                    </div>
                </div>

                <div class="second">
                    <span>Color<i class="arrow-right-2 fa-solid fa-chevron-right"></i></span>
                </div>

                <div id="button-sec">
                    <div class="filter-brand-buttons row">
                        <div class="btn-1 col-lg-6 col-md-6 col-sm-12">
                            <FilterButton title="Purple"/>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <button type="button" id="btn-1" class="filter-buttons btn btn-primary btn-sm" >Red</button>
                        </div>
                    </div>
                    <div class="filter-brand-buttons row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <button type="button" id="btn-2" class="filter-buttons btn btn-primary btn-sm" >Grey</button>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <button type="button" id="btn-3" class="filter-buttons btn btn-primary btn-sm" >Pink</button>
                        </div>
                    </div>
                </div>
                
                <SlideBar />
                
                <div class="text-center">
                    <button type="button" class=" last-filter-btn btn btn-primary btn-sm" data-toggle="modal" data-target="#first-pop-Up">Show Result (308)</button>
                </div>
            </div>
        </div>
    );
}