import React, { useEffect, useState } from "react";

import Button from "../Button/Button";
import { CgMenu } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./MiddleHeader.css";

const MiddleHeader = () => {
	const [clickState, setClickState] = useState(false);
	const menuClick = (a) => {
		// const menuButton = document.querySelector(".mobile-nav-list");
		// menuButton.classList.toggle("active");
		setClickState(!clickState);
	};
	useEffect(() => {}, clickState);
	return (
		<div>
			<div className="hidden">
				<div id="button">
					<Button value={<CgMenu />} call={menuClick} />
				</div>
				<div
					className={clickState ? "mobile-nav-list active" : "mobile-nav-list"}
				>
					<NavLink to="/menu">
						<div className="switcher" onClick={menuClick}>
							Menu
						</div>
					</NavLink>
					<NavLink to="/gallery">
						<div className="switcher" onClick={menuClick}>
							Gallery
						</div>
					</NavLink>
					<NavLink to="/recruitment">
						<div className="switcher" onClick={menuClick}>
							Recruitment
						</div>
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
