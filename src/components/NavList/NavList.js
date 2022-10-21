import React from "react";
import { CgEnter } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "../../container/MiddleHeader/MiddleHeader.css";

const NavList = (props) => {
	const styles = props.styleRequired;
	console.log(props);
	return (
		<div id="container-middle">
			<NavLink to="/menu">
				{props.styleRequired ? (
					<div className="links mobile-link">Menu</div>
				) : (
					<div className="links">Menu</div>
				)}
			</NavLink>
			<NavLink to="/gallery">
				{props.styleRequired ? (
					<div className="links mobile-link">Gallery</div>
				) : (
					<div className="links">Gallery</div>
				)}
			</NavLink>
			<NavLink to="/contact">
				{props.styleRequired ? (
					<div className="links mobile-link contact ">Contact</div>
				) : (
					<div className="links contact">Contact</div>
				)}
			</NavLink>
		</div>
	);
};

export default NavList;
