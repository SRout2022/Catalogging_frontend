import React from "react";
import Navbar from "./Navbar";
import AddOn from "./AddOns";
import Card from "./Card";
import CatHome from "./CatHome";
import CatHome2 from "./CatHome2";
import ImageCard from "./ImageCard";
import AllCatlogue from "./AllCatalogue";
import FilterCard from "./FilterCard";
import CatModal from "./CatModal";
import AddProduct from "./AddProduct/AddProduct";
import AddProduct2 from "./AddProduct/AddProduct2";
import MonitorProduct from "./MonitorProduct/MonitorProduct";
import ProductEntry from "./ModalComp/ProductEntry";
import SelectProd from "./SelectProduct";
import ReviewCat from "./ReviewCat/ReviewCat";

var screen = 1;

function viewScreen() {
	if (screen === 1)
		return (
			<div>
				<Navbar title="Home" screen={screen} />
				<CatHome />
			</div>
		);
	else if (screen === 2)
		return (
			<div>
				<Navbar title="Home" screen={screen} />
				<CatHome2 />
			</div>
		);
	else if (screen === 3)
		return (
			<div>
				<Navbar title="Home" screen={screen} />
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-6">
						<FilterCard />
					</div>
					<div class="col-lg-8 col-md-6 col-sm-6">
						<CatModal />
						<AllCatlogue />
					</div>
				</div>
			</div>
		);
	else if (screen === 4)
		return (
			<div>
				<Navbar title="Home" screen={screen} />
				<AddProduct />
			</div>
		);
	else if (screen === 5)
		return (
			<div>
				<div style={{ visibility: "collapse" }}>
					<Navbar title="Home" screen={screen} />
				</div>

				<AddProduct2 />
			</div>
		);
	else if (screen === 6)
		return (
			<div>
				<Navbar title="Home" screen={screen} />
				<MonitorProduct />
			</div>
		);
	else if (screen === 7)
		return (
			<div>
				<Navbar title="Home" screen={screen} />
				<ProductEntry />
			</div>
		);
	else if (screen === 8)
		return (
			<div>
				<Navbar title="Home" screen={screen} />
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-6">
						<FilterCard />
					</div>
					<div class="col-lg-8 col-md-6 col-sm-6">
						<CatModal />
						<SelectProd />
					</div>
				</div>
			</div>
		);
	else if (screen === 9)
		return (
			<div>
				<div style={{ visibility: "collapse" }}>
					<Navbar title="Home" screen={screen} />
				</div>

				<ReviewCat />
			</div>
		);
}

export default function App() {
	return (
		<div>
			<div class="above-navbar">
				<span class="section-heading"> Cataloging </span>
				<AddOn />
			</div>

			{/* <Navbar title="Home"/> */}
			{viewScreen()}
		</div>
	);
}
