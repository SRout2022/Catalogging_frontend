import React, { useState } from "react";
import { BlankCard } from "./ImageCard";
import ImageCard from "./ImageCard";
import {Link, useNavigate} from "react-router-dom"
import ReviewCat from "./ReviewCat/ReviewCat";
import Navbar from "./Navbar";

function SelectProd() {

	const[scr, setScr] = useState(1);
	let navigate = useNavigate();

	function onContinue()
	{
		console.log("OnContinue Entered")
		navigate("/reviewCat")
		
	}

	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");
	}

	// Close the dropdown menu if the user clicks outside of it

	window.onclick = function (event) {
		if (!event.target.matches(".dropbtn")) {
			var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains("show")) {
					openDropdown.classList.remove("show");
				}
			}
		}
	};

	return (
		<div>
			{/* <div> */}
			<div id="selec-Prod-Top">
				<span
					style={{ fontSize: "125%", fontWeight: "700", fontFamily: "poppins" }}
				>
					Select Products
				</span>
				<div id="slec-Prod-Top-btn">
					<div class="dropdown">
						<button onClick={myFunction} class="dropbtn">
							Sort By <i class="fa-solid fa-sort-down"></i>
						</button>
						<div id="myDropdown" class="dropdown-content">
							<a href="#">Category</a>
							<a href="#">Price</a>
							<a href="#">Popularity</a>
							<a href="#">Color</a>
							<a href="#">Gender</a>
							<a href="#">Brand</a>
							<a href="#">Availabilty</a>
						</div>
					</div>
					<button
						class="select-prod-continue-btn"
						data-toggle="modal"
						data-target="#customize-buyerView-modal"
					>
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
								<div class="modal-body">
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>

									<div id="buyer-View-custom-content">
										<h2 id="buyerView-Modal-title" style={{fontSize:"140%", color:"black"}}>Customize Buyer View</h2>
										
										<form>
											<div class="form-group prod-entry-form">
												<input
													type="text"
													class="form-control"
													id="catalog-field-name"
													aria-describedby="productID"
													placeholder="Name of the Catalog"
												/>
											</div>
											<p style={{color:"#878A8C", fontSize:"70%", marginBottom:"2rem", marginTop:"2rem"}}>Select Fields to show for Catalog:</p>
											<div>
												<div class="row checked-btn-div">
													<div class="col-lg-4 col-md-4">
														<input
															type="checkbox"
															id="vehicle1"
															class="chk-box"
														/>
														<label class="label-title" for="vehicle1" > Name</label>
													</div>
													<div class="col-lg-4 col-md-4">
														<input
															type="checkbox"
															id="vehicle2"
															class="chk-box"
														/>
														<label class="label-title" for="vehicle2"> Size</label>
													</div>
													<div class="col-lg-4 col-md-4">
														<input
															type="checkbox"
															id="vehicle3"
															class="chk-box"
														/>
														<label class="label-title" for="vehicle3"> Shape</label>
													</div>
												</div>

												<div class="row checked-btn-div">
													<div class="col-lg-4 col-md-4">
														<input
															type="checkbox"
															id="vehicle1"
															class="chk-box"
														/>
														<label class="label-title" for="vehicle1"> Price</label>
													</div>
													<div class="col-lg-4 col-md-4">
														<input
															type="checkbox"
															id="vehicle2"
															class="chk-box"
														/>
														<label class="label-title" for="vehicle2"> Name</label>
													</div>
													<div class="col-lg-4 col-md-4">
														<input
															type="checkbox"
															id="vehicle3"
															class="chk-box"
														/>
														<label class="label-title" for="vehicle3"> Color</label>
													</div>
												</div>
											</div>

											<div id="cont-btn-div">
											<Link to="/reviewCat">
												<button id="modal-continue-btn" onClick={onContinue}>
													Continue
												</button>
											</Link>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="btn-grp-selec-prod">
				<button id="item-btn-selec-prod" class="sub-top-btn">
					Electronics{" "}
					<button class="cross-sec">
						<i class="fa-solid fa-xmark"></i>
					</button>
				</button>
				<button class="sub-top-btn">
					Clear All{" "}
					<button class="cross-sec">
						<i class="fa-solid fa-xmark"></i>
					</button>
				</button>
			</div>

			{/* </div> */}

			{/* <div class="dropdown">
					<button class="dropdown-toggle"
									type="button"
									// id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
						Sort By <i class="fa-solid fa-sort-down"></i>{" "}
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a class="dropdown-item" href="#">
							Action
						</a>
						<a class="dropdown-item" href="#">
							Another action
						</a>
						<a class="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div> */}

			{/* <div class="dropdown">
					<button onClick={myFunction} class="dropbtn">
						Sort By <i class="fa-solid fa-sort-down"></i>
					</button>
					<div id="myDropdown" class="dropdown-content">
						<a href="#">Category</a>
						<a href="#">Price</a>
						<a href="#">Popularity</a>
						<a href="#">Color</a>
						<a href="#">Gender</a>
						<a href="#">Brand</a>
						<a href="#">Availabilty</a>
					</div>
				</div> */}

			<div id="block1" class="image-card">
				<div class="row">
					<div class="col-lg-4 col-md-6 col-sm-12">
						<ImageCard img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_JgZv_wQlg_eh5CP2eqiij56Si05lA6lpi48g6hOf4fqqcoXkZdwXRLtAE2qJMrj_7vr0J466Cee69nBykDF26UbVYoRZwIgxc2jAtJCycef4A11F1Icsmg&usqp=CAY" />
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<ImageCard img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjXW0wSojnT6hugaShJtF5uL3V3QcRdjGDloXewEddZ4-PK5Pvkk6Y8pY9vzEg4E4ph4czZEM40joLUl910grZrWqPIi4gRGOUYZhAkbw&usqp=CAY" />
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<ImageCard img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmi_s0zrnPTivSM9j7fAXGldL18LQwZ-c7MR-xjS8IcvVgn-3t0k-pvlU-TQ8AyL2e1zYjan1qQ-rbOx8ARgPadRAWZ2puo2sYwBy38xpw" />
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<ImageCard img="https://www.rakhifashion.com/ProductImages/Thumb_cg_1008_1.jpg" />
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<ImageCard img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_JgZv_wQlg_eh5CP2eqiij56Si05lA6lpi48g6hOf4fqqcoXkZdwXRLtAE2qJMrj_7vr0J466Cee69nBykDF26UbVYoRZwIgxc2jAtJCycef4A11F1Icsmg&usqp=CAY" />
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<ImageCard img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGxOXvT2UNEjMojsDH3RLILWD3Zhjdy_9X8MtiPZaDAMX0ihuubrLQWpuu8Y-3O9dQSg_mvzsRFpzAHyPazF56zSRevf71URgOjk8lX_Q&usqp=CAY" />
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<ImageCard img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBawhu8FFpKtECfnKLNAKGi9lREFvcMw5VZDG94t3WKKTPXL_Muicn01UpemWMDlLZliQvfmElaAL3oZhMfkLDt91ByYGR_1K2fLxWJGNS" />
					</div>
					<div class="col-lg-4 col-md-6 col-sm-12">
						<ImageCard img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpxEd0BQNmIzkPY2Ig9YBBgaqnwPbRVaqn7DY5Pyo01NjyxPvvt4WMHlYFd9us4VeCDCyvKqvauby8EABn25KqdYxGfZcdHf2Y0ditANo5AVoYdmOetEg36Q&usqp=CAY" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SelectProd;
