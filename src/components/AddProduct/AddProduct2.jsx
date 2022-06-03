import React from "react";
import ListItem from "./ListItem";
import ListBody from "./ListBody";
import ListBody2 from "./ListBody2";

export default function AddProduct2() {
	return (
		<div>
			<div style={{marginBottom:"3rem"}}>
				<span id="add-product-text">Add Product</span>
                <button type="button" class="btn btn-outline-secondary " id="add-field-btn">Edit</button>
			</div>
			<ListBody />
		</div>
	);
}