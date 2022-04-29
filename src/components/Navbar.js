import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/robbie.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div className=" ">
				<img src={Logo} alt="Logo" style={{ width: "50px" }}></img>
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
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">Home</li>
				<li className="py-6 text-4xl">About</li>
				<li className="py-6 text-4xl">Skillset</li>
				<li className="py-6 text-4xl">Work</li>
				<li className="py-6 text-4xl">Contact</li>
			</ul>

			{/* Social buttons */}
			<div className="flex fixed flex-column top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60] flex justify-between items-center ml-[-100px]">
						<a className="flex justify-between items-center w-full text-gray-300"
						href="/">
							Linkedin <FaFacebook size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
