import React from "react";
import { ExtendedButton, SmallButton } from "./Buttons";
import { Link } from "react-router-dom";
import CatModal from "./CatModal";

function Navbar(prop) {
	if (prop.screen == 6 || prop.screen == 8)
		return (
			<div class="shadow p-3 mb-5 bg-white rounded">
				<div class="navbar-title">
					{prop.title}

					<span class="nav-button-1" style={{ visibility: "hidden" }}>
						
							<ExtendedButton content="Monitor Upload Status" />
						
					</span>

					<span class="nav-button-2">
						<SmallButton content="SetUp" />
					</span>
				</div>
			</div>
		);
	else
		return (
			<div class="shadow p-3 mb-5 bg-white rounded">
				<div class="navbar-title">
					{prop.title}

					<span class="nav-button-1">
                    <Link to="/monitorStatus">
						<ExtendedButton content="Monitor Upload Status" />
                    </Link>
					</span>

					<span class="nav-button-2">
						<SmallButton content="SetUp" data-toggle="modal" data-target="#first-pop-Up"/>
					</span>
					<CatModal />
				</div>
			</div>
		);
}

export default Navbar;
