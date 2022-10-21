import React from "react";
import "./Button.css";

const Button = (props) => {
	return (
		<div>
			<button
				className={props.classname}
				onClick={props.call}
				// onMouseOver={props.hoverIn}
				// onMouseOut={props.hoverOut}
				style={{ backgroundColor: props.color }}>
				{props.value}
			</button>
		</div>
	);
};

export default Button;
