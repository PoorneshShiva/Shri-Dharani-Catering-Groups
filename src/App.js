import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Header from "./container/Header/Header";
import MiddleHeader from "./container/MiddleHeader/MiddleHeader";
import "./App.css";
import Recruitment from "./components/Recruitment/Recruitment";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<div>
						<Header />
					</div>
				</React.Fragment>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/recruitment" element={<Recruitment />} />
				</Routes>
			</BrowserRouter>
		);
	}
}
export default App;
