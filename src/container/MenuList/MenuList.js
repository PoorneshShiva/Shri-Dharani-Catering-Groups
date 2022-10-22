import React, { useState } from "react";
import { BiLock, BiRightArrow, BiUpArrow } from "react-icons/bi";
import Image from "../Image/Image";
import "./MenuList.css";
const MenuList = (props) => {
	const [image, setImage] = useState(false);
	return (
		<div>
			<div
				className="menuList"
				style={{ borderBottom: !image && "thin solid grey" }}
			>
				<div className="food-title">{props.value}</div>

				<div className="arrow-button">
					<div>
						<button onClick={() => setImage(!image)}>
							{!image ? <BiRightArrow /> : <BiUpArrow />}
						</button>
					</div>
				</div>
			</div>

			<div
				style={{
					display: image && "block",
					borderBottom: image && "thin solid grey",
				}}
			>
				{image && <img id="image" src={props.imageUrl} />}
			</div>
		</div>
	);
};

export default MenuList;
