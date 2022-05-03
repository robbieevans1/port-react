import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#5cdb94] text-blue-900">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-blue-900">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hello, my name is Robbie. Welcome to my potfolio website!</p>
					</div>
					<div>
						<p>
							Greetings, and thanks for visiting my website! My name is Robbie
							Evans and I am a junior full stack developer currently enrolled in
							University of Richmond's Coding Bootcamp.
							<br></br>
							<br></br>
							My previous experience includes working as an associate researcher
							at a real estate tech company. Highly interested in job
							opportunities in web development. Let's connect!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
