import React from "react";
import ListItem from "./ListItem";
import ListBody from "./ListBody";

export default function AddProduct() {
	return (
		<div>
			<div style={{marginBottom:"3rem"}}>
				<span id="add-product-text">Add Product</span>
                <button type="button" class="btn btn-outline-secondary " id="add-field-btn">Add a field</button>
			</div>
			<ListBody />
            <div>
                <button id="confirm-btn">Confirm</button>
            </div>
		</div>
	);
}