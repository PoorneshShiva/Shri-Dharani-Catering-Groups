import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
	return (
		<div class="footer">
			<div id="social-media-container">
				<div className="social-media">
					<div className="social-media-link facebook">
						<a href="http://">
							<BsFacebook />
						</a>
						<div className="title"> Facebook</div>
					</div>
				</div>
				<div className="social-media">
					<div className="social-media-link instagram">
						<a href="https://www.instagram.com/_sridharanicatering__no1_?r=nametag">
							<BsInstagram />
						</a>
						<div className="title">Instagram</div>
					</div>
				</div>
				<div className="social-media">
					<div className="social-media-link mail">
						<a href="http://">
							<SiGmail />
						</a>
						<div className="title">Email</div>
					</div>
				</div>
				<div className="social-media">
					<div className="social-media-link whatsapp">
						<a href="http://wa.me/918618875812">
							<BsWhatsapp />
						</a>
						<div className="title"> Whatsapp</div>
					</div>
				</div>
			</div>
			<div id="copyright">
				<AiOutlineCopyright />
				Copyright 2022
			</div>
		</div>
	);
};

export default Footer;
