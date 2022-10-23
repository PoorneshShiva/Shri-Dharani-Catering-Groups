import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase";
import "./Feedback.css";

import Stars from "../../container/Stars/Stars";
const Feedback = () => {
	const [age, setAge] = useState("");
	const [star, setStar] = useState(false);
	const [disable, setDisable] = useState(false);
	const userCollection = collection(db, "Feedback");
	const handleSubmitClick = (e) => {
		e.preventDefault();
		const foodReview = parseInt(
			document.querySelector(".food-block .stars").classList[1]
		);
		const serviceReview = parseInt(
			document.querySelector(".service-block .stars").classList[1]
		);

		const gender = document.querySelector("#gender").value;

		addDoc(userCollection, {
			age: parseInt(age),
			date: new Date(),
			"food-review": foodReview,
			"service-review": serviceReview,
			gender: gender,
		}).then(alert("Thank you"));
		setAge("");
		setStar(true);

		// console.log(parseInt(foodReview.classList[1]));
	};
	return (
		<div>
			<div className="form-container">
				<div className="rec-title">Feedback Form</div>
				<form action="" onSubmit={(e) => handleSubmitClick(e)}>
					<div style={{ margin: "20px" }}>
						<div className="food-block">
							<label htmlFor="">Food</label>
							<div classNamer="right" style={{ display: "flex" }}>
								<Stars null={star} />
							</div>
						</div>
						<div className="service-block">
							<label htmlFor="">Service</label>
							<div classNamer="right" style={{ display: "flex" }}>
								<Stars null={star} />
							</div>
						</div>

						<div className="combo-block">
							<div className="age-block">
								<label htmlFor="">Age</label>

								<input
									type="age"
									value={age}
									onChange={(e) => setAge(e.target.value)}
								/>
							</div>
							<div className="gender-block">
								<label htmlFor="">Gender</label>
								<select name="gender" id="gender">
									<option name="Male">Male</option>
									<option name="Female">Female</option>
									<option name="other">other</option>
								</select>
							</div>
						</div>
						<input id="submit" type="submit" />
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Feedback;
