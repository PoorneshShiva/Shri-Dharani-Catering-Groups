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
		<div r>
			<div className="hidden">
				<div id="button">
					<Button value={<CgMenu />} call={menuClick} />
				</div>
				<div className={"mobile-nav-list "}>
					<a href="/menu">
						<div className="switcher">Menu</div>
					</a>
					<a href="/gallery">
						<div className="switcher">Gallery</div>
					</a>
					<a href="/recruitment">
						<div className="switcher">Recruitment</div>
					</a>
					<a href="/contact">
						<div className="switcher">About us</div>
					</a>
				</div>
			</div>

			<div id="container-middle">
				<NavLink to="/menu">
					<div className="links">
						{/* <NavLink to="/">Home</NavLink> */}
						Menu
					</div>
				</NavLink>
				<NavLink to="/gallery">
					<div className="links">Gallery</div>
				</NavLink>
				<NavLink to="/contact">
					<div className="links contact">About us</div>
				</NavLink>
				<NavLink to="/recruitment">
					<div className="links contact">Recruitment</div>
				</NavLink>
			</div>
		</div>
	);
};

export default MiddleHeader;
