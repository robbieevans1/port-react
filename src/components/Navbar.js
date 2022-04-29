import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/robbie.png";

const Navbar = () => {
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div >
				<img className="mt-5" src={Logo} alt="Logo" style={{ width: "500px" }}></img>
			</div>

			{/* menu */}
			<div className="hidden md:flex">
				<ul className="flex">
					<li>Home</li>
					<li>About</li>
					<li>Skillset</li>
					<li>Work</li>
					<li>Contact</li>
				</ul>
			</div>

			{/* Hamburger Button */}
			<div className="hidden">
				<FaBars />
			</div>

			{/* Mobile menu */}
			<ul className="hidden">
				<li>Home</li>
				<li>About</li>
				<li>Skillset</li>
				<li>Work</li>
				<li>Contact</li>
			</ul>

			{/* Social buttons */}
			<div className="hidden"></div>
		</div>
	);
};

export default Navbar;
