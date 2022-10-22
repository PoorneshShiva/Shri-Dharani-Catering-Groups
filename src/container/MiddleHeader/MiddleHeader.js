import React from "react";

import Button from "../Button/Button";
import { CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./MiddleHeader.css";

const MiddleHeader = () => {
	const menuClick = (a) => {
		const menuButton = document.querySelector(".mobile-nav-list");
		menuButton.classList.toggle("active");
	};

	return (
		<div>
			<div className="hidden">
				<div id="button">
					<Button value={<CgMenu />} call={menuClick} />
				</div>
				<div className={"mobile-nav-list "}>
					<NavLink to="/menu">
						<div className="switcher">Menu</div>
					</NavLink>
					<NavLink to="/gallery">
						<div className="switcher">Gallery</div>
					</NavLink>
					<NavLink to="/recruitment">
						<div className="switcher">Recruitment</div>
					</NavLink>
					<NavLink to="/contact">
						<div className="switcher">About us</div>
					</NavLink>
				</div>
			</div>

			<div id="container-middle">
				<NavLink to="/">
					<div className="links">
						{/* <NavLink to="/">Home</NavLink> */}
						Home
					</div>
				</NavLink>
				<NavLink to="/menu">
					<div className="links">
						{/* <NavLink to="/">Home</NavLink> */}
						Menu
					</div>
				</NavLink>
				<NavLink to="/gallery">
					<div className="links">Gallery</div>
				</NavLink>

				<NavLink to="/recruitment">
					<div className="links contact">Recruitment</div>
				</NavLink>
			</div>
		</div>
	);
};

export default MiddleHeader;
