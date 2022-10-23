import React from "react";
import "./LeftHeader.css";
import logo from "../../logo2.jpeg";
import { NavLink } from "react-router-dom";
const LeftHeader = () => {
	return (
		<NavLink to="/#/home">
			<div id="container-left">
				<div style={{ display: "fex", flexDirection: "column" }}>
					<div>
						<img src={logo} alt="Shri Dharni Catering Groups" />
					</div>
					<div class="year">SINCE 2003</div>
				</div>
				<div id="title-container">
					<div>
						<span>Shri Dharani</span>
					</div>
					<div>
						<span>Catering Groups</span>
					</div>
				</div>
			</div>
		</NavLink>
	);
};

export default LeftHeader;
