import React, { lazy } from "react";
import Image from "../../container/Image/Image";
import Footer from "../Footer/Footer";
import "./Gallery.css";
// import img from "./images/gallery-images";

const Gallery = () => {
	function importAll(r) {
		return r.keys().map(r);
	}
	const images = Array.from(
		importAll(
			require.context(
				"../../../public/images/gallery-images",
				false,
				/\.(png|jpe?g|svg)$/
			)
		)
	);
	const pictures = {
		image1: ["./images/gallery-images/image1.jpeg", "Fresh Mushroom"],
		image2: ["./images/gallery-images/image2.jpeg", "Vada"],

		image5: ["./images/gallery-images/image14.jpeg", "Almonds and Nuts"],

		image8: ["./images/gallery-images/image17.jpeg", "Event Management-1"],
		image9: ["./images/gallery-images/image18.jpeg", "Event Management-2"],

		image11: ["./images/gallery-images/image5.jpeg", "Mushroom Manchurian"],

		image20: ["./images/gallery-images/image13.jpeg", "Fresh Fish"],
		image17: ["./images/gallery-images/image10.jpeg", "Fish Fry"],
	};
	const postsItems = [];
	Object.values(pictures).forEach((each, index) => {
		// eslint-disable-next-line
		postsItems.push(
			<div key={index}>
				<div className="image-container">
					<div className="image">
						<img src={each[0]} alt="" />
					</div>
					<div className="title"> {each[1]}</div>
				</div>
			</div>
		);
	});

	console.log(postsItems[1]);

	return (
		<div className="gallery-container">
			<div className="gallery-main-container">
				<div className="gallery-title">
					<h1>Pictures</h1>
				</div>
				<div className="gallery-grid">{postsItems}</div>
			</div>

			<Footer />
		</div>
	);
};

export default Gallery;
