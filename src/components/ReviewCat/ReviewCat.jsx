import React from "react";
import ListBody from "../AddProduct/ListBody";

export default function ReviewCat() {
	return (
		<div>
			<div class="par-content-rev-prod"style={{ marginBottom: "3rem"}}>
				<span id="add-product-text">XYZ Catalog</span>
				<div class="content-rev-Cat">
					<button id="rev-cat-add-field"><i id="rev-cat-plus" class="fa-solid fa-circle-plus"></i>Add a field</button>
					<button
						class="select-prod-continue-btn"
                        data-toggle="modal"
						data-target="#customize-buyerView-modal">
						Continue
					</button>
                    <div
						className="modal fade bd-example-modal-lg "
						id="customize-buyerView-modal"
						tabindex="-1"
						role="dialog"
						aria-labelledby="myLargeModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog  modal-dialog-centered">
							<div className="modal-content">
								<div class="modal-body rev-Cat-modal-body">
                                    
                                    <div style={{display:"flex", justifyContent: "center"}}>
                                        <h2 id="" style={{fontSize:"170%", color:"black"}}>Confirm All details</h2>
                                    </div>

									<div id="review-Cat-content">
										
										
										<form class="rev-Cat-inp-field">
											<div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control form-inp"
													id=""
													aria-describedby="productID"
													placeholder="Catalog Name"
												/>
                                            </div>
                                            <div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control form-inp" 
													id=""
													aria-describedby="productID"
													placeholder="Buyer Company Name(optional)"
												/>
                                            </div>
                                            <div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control form-inp"
													id=""
													aria-describedby="productID"
													placeholder="Buyer Email ID(optional)"
												/>
                                            </div>
                                            <div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control form-inp"
													id=""
													aria-describedby="productID"
													placeholder="Presentation Template"
												/>
                                            </div>
                                            <div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control form-inp"
													id=""
													aria-describedby="productID"
													placeholder="Link Settings"
												/>
                                            </div>
											
											<div id="cont-btn-div">
												<button id="modal-continue-btn" data-dismiss="modal">
													Generate
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
		</div>
	);
}