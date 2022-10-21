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
	const postsItems = [];
	images.forEach((each, index) => {
		// eslint-disable-next-line

		postsItems.push(
			<div key={index}>
				<div className="image-container">
					<div className="image">
						<img src={each} alt="" />
					</div>
					<div className="title"> Description</div>
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
				<div className="gallery-grid">
					{postsItems}

					<div className="image-container">
						<div className="image">
							<img
								src="https://m.media-amazon.com/images/I/71OebiSOsRL._AC_UY218_.jpg"
								alt=""
							/>
						</div>
						<div className="title"> Description</div>
					</div>
					<div className="image-container">
						<div className="image">
							<img src="./images/gallery-images" alt="" />
						</div>
						<div className="title"> Description</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Gallery;
