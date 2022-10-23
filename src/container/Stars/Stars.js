import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Stars.css";
const Stars = (props) => {
	const fiveStars = Array(5).fill("null");
	const [hoverValue, setHoverValue] = useState(0);
	const [clickValue, setClickValue] = useState(0);
	console.log(props.null);

	return (
		<div
			className={"stars " + hoverValue}
			style={{ display: "flex", marginBottom: "20px" }}
		>
			{fiveStars.map((each, index) => {
				return !props.null ? (
					<div style={{ display: "flex" }}>
						<FaStar
							size="30"
							style={{ marginRight: 5 }}
							color={(clickValue || hoverValue) > index ? "gold" : "grey"}
							onMouseOver={() => setHoverValue(index + 1)}
							onMouseClick={() => setClickValue(index + 1)}
						/>
					</div>
				) : (
					<div style={{ display: "flex" }}>
						<FaStar size="30" style={{ marginRight: 5 }} color="grey" />
					</div>
				);
			})}
		</div>
	);
};

export default Stars;
