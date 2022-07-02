import React from "react";
import ListBody2 from "./ListBody2";
import ProductEntry from "../ModalComp/ProductEntry";
import {Link} from "react-router-dom"

export default function MonitorProduct() {
	// document.getElementById("#modal-back-btn").click(function()
	// {
	// 	document.getElementById("#product-entry-modal").hide();
	// })

	return (
		<div>
			<div style={{ marginBottom: "3rem" }}>
				<span id="add-product-text">Monitor Upload Status</span>
			</div>
			<ListBody2 />
			<div class="monitor-Prod-sec">
				<p
					style={{
						marginTop: "1rem",
						fontSize: "80%",
						fontFamily: "poppins",
						color: "#888A8C",
					}}
				>
					NOTE: Pending Product will get processed in 6-8 hours.
				</p>

				{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button> */}
				<div>
				<Link to="/allCat">
					<button id="allProducts-btn">All Products</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
