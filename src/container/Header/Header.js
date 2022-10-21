import React from "react";
import LeftHeader from "../LeftHeader/LeftHeader";
import MiddleHeader from "../MiddleHeader/MiddleHeader";
import RightHeader from "../RightHeader/RightHeader";
import "./Header.css";

const Header = () => {
	return (
		<div id="container">
			<div id="left-header">
				<LeftHeader />
			</div>
			<div id="right-header">
				<MiddleHeader />
			</div>
			{/* <RightHeader /> */}
		</div>
	);
};

export default Header;
