import React from "react";
import "./LeftHeader.css";
import logo from "../../logo.jpeg";
const LeftHeader = () => {
	return (
		<a href="/home">
			<div id="container-left">
				<img src={logo} alt="Shri Dharni Catering Groups" />
				<div>
					<span>Shri Dharani</span>
					<span>Catering Groups</span>
				</div>
			</div>
		</a>
	);
};

export default LeftHeader;
