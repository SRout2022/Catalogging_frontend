import React from "react";
import ListItem from "./ListItem";
import ListBody from "./ListBody";
import { Link } from "react-router-dom";

export default function AddProduct() {
	return (
		<div>
			<div style={{ marginBottom: "3rem" }}>
				<span id="add-product-text">Add Product</span>
				<button
					type="button"
					class="btn btn-outline-secondary "
					id="add-field-btn"
					data-toggle="modal"
					data-target="#product-entry-modal"
				>
					Add a field
				</button>
				<div
					className="modal fade bd-example-modal-lg "
					id="product-entry-modal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="myLargeModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg modal-dialog-centered">
						<div className="modal-content">
							<div class="modal-body">
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>

								<div class="row">
									<div class="col-lg-6 col-md-6">
										<img
											id="Prod-Modal-img"
											src="https://t3.ftcdn.net/jpg/01/91/89/12/360_F_191891230_LRAZDEd8EZuG1SPmLMWGZfgVTRMP2zyD.jpg"
										></img>
									</div>
									<div class="col-lg-6 col-md-6">
										<h2 id="prod-entryModal-title">Product Name</h2>
										<form>
											<div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control"
													id="prod-ID-field"
													aria-describedby="productID"
													placeholder="Product ID"
												/>
											</div>

											<div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control"
													id="moq-field"
													aria-describedby="MOQ"
													placeholder="MOQ"
												/>
											</div>

											<div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control"
													id="SP-field"
													aria-describedby="SellingPrice"
													placeholder="Selling Price"
												/>
											</div>

											<div class="form-group prod-entry-form">
												<textarea
													class="form-control"
													id="exampleFormControlTextarea1"
													rows="3"
													placeholder="Description"
												></textarea>
											</div>

											<div class="modal-back-btnb-div">
												<button id="modal-back-btn" data-dismiss="modal">
													Back
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ListBody />

			<Link to="/reviewProd">
				<div>
					<button id="confirm-btn">Confirm</button>
				</div>
			</Link>
		</div>
	);
}
