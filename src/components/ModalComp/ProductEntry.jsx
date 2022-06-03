import React from "react";

export default function ProductEntry()
{
    // document.getElementById('#code').on('shown.bs.modal', function (e) {
	// 	alert("Modal has Opened");
	//   });

	return (
			<div>
				<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
				<div
					className="modal fade bd-example-modal-lg show"
					id="code"
					tabindex="-1"
					role="dialog"
					aria-labelledby="myLargeModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-lg modal-dialog-centered">
						<div className="modal-content">Helllo How is it Going?</div>
					</div>
				</div>
			</div>
		);

		// return (
		// 	<div>
		// 		<div
		// 			class="modal fade"
		// 			id="test-pop-Up"
		// 			tabindex="-1"
		// 			role="dialog"
		// 			aria-labelledby="exampleModalCenterTitle"
		// 			aria-hidden="true"
		// 		>
		// 			<div class="modal-dialog modal-dialog-centered " role="document">
		// 				<div class="modal-content">
		// 					<div class="modal-body">
        //                         <button
		// 								type="button"
		// 								class="close"
		// 								data-dismiss="modal"
		// 								aria-label="Close">
									
		// 								<span aria-hidden="true">&times;</span>
		// 							</button>

		// 						<div class="body-start">
					
		// 							<div class="add-manual-sec">
                                        
        //                                 <div class="inpForm first">
        //                                     <i class="fa-solid fa-circle-plus"></i>{" "}
        //                                     <span class="inpForm-text-1"> Add Manually </span>
        //                                 </div>
                                        
        //                             </div>

        //                             <hr id="dialog-line"></hr>

		// 							<div class="dialog-upload-sec text-center">
                                        
        //                                 <h2 id="upload-files-text">Upload Files</h2>
        //                                 <p id="upload-files-sub-text">Template Download & Upload Files</p>
        //                                 <div class="inpForm second ">
        //                                     <span class="inpForm-text-2">
        //                                         {" "}
        //                                         Upload Anyother File Type{" "}
        //                                     </span>
        //                                     <i class="fa-solid fa-arrow-up-from-bracket"></i>
        //                                 </div>

        //                             </div>

		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// );
}