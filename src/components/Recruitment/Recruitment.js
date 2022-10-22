import React, { useState } from "react";
import Footer from "../Footer/Footer";
import db from "../../firebase";
import "./Recruitment.css";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const Recruitment = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [number, setNumber] = useState("");
	const [disable, setDisable] = useState(false);
	const userCollection = collection(db, "contact");
	const handleSubmit = (e) => {
		e.preventDefault();
		const gender = document.querySelector("#gender").value;

		addDoc(userCollection, {
			name: name,
			email: email,
			age: age,
			number: number,
			gender: gender,
		});
		setEmail("");
		setName("");
		setNumber("");
		setAge("");
	};

	return (
		<div>
			<div className="form-container">
				<div className="rec-title">Recruitment Form</div>
				<form action="" onSubmit={handleSubmit}>
					<div style={{ margin: "20px" }}>
						<div className="name-block">
							<label htmlFor="">Name</label>
							<input
								required
								type="name"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>

						<div className="email-block">
							<label htmlFor="">Email</label>

							<input
								type="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>

						<div className="number-block">
							<label htmlFor="">Phone Number</label>

							<input
								required
								type="text"
								value={number}
								onChange={(e) => setNumber(e.target.value)}
							/>
						</div>
						<div className="combo-block">
							<div className="age-block">
								<label htmlFor="">Age</label>

								<input
									required
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
						<input
							id="submit"
							type="submit"
							value="Submit"
							disabled={disable && "true"}
						/>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Recruitment;
