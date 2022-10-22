import React, { useState } from "react";
import Button from "../../container/Button/Button";
import Footer from "../Footer/Footer";
import "./Menu.css";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
const Menu = () => {
	const [tab, setTab] = useState("veg");

	return (
		<div className="main-container">
			<div className="Tab-Menu">
				<div className="Tab">
					<button
						style={{
							borderLeft: "none",
							borderBottom: tab === "veg" && "3px solid var(--secondary-color)",
						}}
						onClick={() => setTab("veg")}
					>
						Veg
					</button>
				</div>
				<div className="Tab">
					<button
						style={{
							borderBottom:
								tab === "Non-Veg" && "3px solid var(--secondary-color)",
						}}
						onClick={() => setTab("Non-Veg")}
					>
						{" "}
						Non-Veg
					</button>
				</div>
			</div>

			<div className="menu-component">
				{tab === "veg" ? <Veg /> : <NonVeg />}
			</div>
			<Footer />
		</div>
	);
};

export default Menu;
