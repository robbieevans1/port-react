import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/robbie.png";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			<div className=" ">
				<img src={Logo} alt="Logo" style={{ width: "50px" }}></img>
			</div>

			{/* menu */}
			<ul className="hidden md:flex">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

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
			<div className="hidden lg:flex fixed flex-column top-[35%] left-0 ">
				<ul className="">
					<li className="w-[160px] py-2 h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] py-2 h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] py-2 h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c52220]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] py-2 h-[60] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f89]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
