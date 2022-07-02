import React, { useState } from "react";
import {Link} from "react-router-dom"

export default function CatModal() {
	const [smodal, setModal] = useState(1);

	function showNext()
	{
		setModal(2)
	}


	if (smodal == 1) {
		return (
			<div>
				<div
					class="modal fade"
					id="first-pop-Up"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered " role="document">
						<div class="modal-content">
							<div class="modal-body">
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>

								<div class="body-start">
									<div class="add-manual-sec">
									<Link to="/addProdManually" style={{color:"black"}}>
										<div class="inpForm first">
											<i class="fa-solid fa-circle-plus"></i>{" "}
											<span class="inpForm-text-1"> Add Manually </span>
										</div>
										</Link>
									</div>

									<hr id="dialog-line"></hr>

									<div class="dialog-upload-sec text-center">
										<h2 id="upload-files-text">Upload Files</h2>
										<p id="upload-files-sub-text">
											Template Download & Upload Files
										</p>
										<div class="inpForm second " onClick={showNext}>
											<span class="inpForm-text-2">
												{" "}
												Upload Any other File Type{" "}
											</span>
											<i class="fa-solid fa-arrow-up-from-bracket"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} 
	else
		return (
			<div>
				<div
					class="modal fade"
					id="second-pop-Up"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered " role="document">
						<div class="modal-content">
							<div class="modal-body">
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>

								<div class="body-start">
									<div class="dialog-upload-sec text-center">
										<div class="inpForm second ">
											<span class="inpForm-text-2"> Upload File </span>
											<i class="fa-solid fa-arrow-up-from-bracket"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

// function NextCatModal() {
// 	return (
// 		<div>
// 			<div
// 				class="modal fade"
// 				id="second-pop-Up"
// 				tabindex="-1"
// 				role="dialog"
// 				aria-labelledby="exampleModalCenterTitle"
// 				aria-hidden="true"
// 			>
// 				<div class="modal-dialog modal-dialog-centered " role="document">
// 					<div class="modal-content">
// 						<div class="modal-body">
// 							<button
// 								type="button"
// 								class="close"
// 								data-dismiss="modal"
// 								aria-label="Close"
// 							>
// 								<span aria-hidden="true">&times;</span>
// 							</button>

// 							<div class="body-start">
// 								<div class="dialog-upload-sec text-center">
// 									<div class="inpForm second ">
// 										<span class="inpForm-text-2"> Upload File </span>
// 										<i class="fa-solid fa-arrow-up-from-bracket"></i>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export { NextCatModal };
