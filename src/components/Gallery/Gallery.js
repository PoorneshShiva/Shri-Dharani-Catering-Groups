import React, { lazy } from "react";
import Image from "../../container/Image/Image";
import Footer from "../Footer/Footer";
import "./Gallery.css";
// import img from "./images/gallery-images/gallery-images/gallery-images";

const Gallery = () => {
	function importAll(r) {
		return r.keys().map(r);
	}
	const images = Array.from(
		importAll(
			require.context(
				"../images/gallery-images/gallery-images/gallery-images",
				false,
				/\.(png|jpe?g|svg)$/
			)
		)
	);
	const pictures = {
		image1: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.20 PM (1).b5f74127.jpeg",
			"Descp",
		],
		image2: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.20 PM (2).ff660cfe.jpeg",
			"Descp",
		],
		image3: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.20 PM.07922eec.jpeg",
			"Descp",
		],

		image5: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.21 PM (2).c70561e7.jpeg",
			"Descp",
		],

		image10: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.23 PM (2).2e8c6c4f.jpeg",
			"Descp",
		],
		image11: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.23 PM.08e1f293.jpeg",
			"Descp",
		],

		image13: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.24 PM.15289fd8.jpeg",
			"Descp",
		],
		image14: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.25 PM.90d3e836.jpeg",
			"Descp",
		],
		image15: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.26 PM (1).e4943588.jpeg",
			"Descp",
		],
		image16: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.26 PM.97445b41.jpeg",
			"Descp",
		],
		image17: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.27 PM (1).3fc6b1f9.jpeg",
			"Descp",
		],
		image18: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.27 PM (2).eac93cbd.jpeg",
			"Descp",
		],
		image19: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.27 PM.68391ac0.jpeg",
			"Descp",
		],
		image20: [
			"./images/gallery-images/WhatsApp Image 2022-10-19 at 5.40.28 PM.112f472f.jpeg",
			"Descp",
		],
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
				<div className="gallery-grid">
					{postsItems}

					<div className="image-container">
						<div className="image">
							<img
								src="ht./images/gallery-images-amazon.com/images/gallery-images/I/71OebiSOsRL._AC_UY218_.jpg"
								alt=""
							/>
						</div>
						<div className="title"> Description</div>
					</div>
					<div className="image-container">
						<div className="image">
							<img
								src="./images/gallery-images/gallery-images/gallery-images"
								alt=""
							/>
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
