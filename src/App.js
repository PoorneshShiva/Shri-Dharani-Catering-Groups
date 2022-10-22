import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import { HashRouter } from "react-router-dom";
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
			<React.StrictMode>
				<HashRouter>
					<Header />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/menu" element={<Menu />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/recruitment" element={<Recruitment />} />
					</Routes>
				</HashRouter>
			</React.StrictMode>
		);
	}
}
export default App;
