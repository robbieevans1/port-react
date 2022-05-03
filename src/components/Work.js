import React from "react";
import Feast from "../assets/work-imgs/feast.png";
import PizzaHunt from "../assets/work-imgs/pizzaHunt.png";
import WeatherDashboard from '../assets/work-imgs/weatherDashboard.png'

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Work
					</p>
					<p className="py-6">
						Here are some of my recently completed projects:
					</p>
				</div>

				<div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* item 1 */}
        	<div style={{backgroundImage: `url(${PizzaHunt})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
					
          	{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
                HTML, CSS and JavaScript App
              </span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Deployment</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Repo</button>
								</a>
							</div>
						</div>
					</div>

          {/* item 2 */}
					<div style={{backgroundImage: `url(${Feast})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
					
          	{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
                HTML, CSS and JavaScript App
              </span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Deployment</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Repo</button>
								</a>
							</div>
						</div>
					</div>

          {/* item 3 */}
					<div style={{backgroundImage: `url(${WeatherDashboard})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
					
          	{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
                HTML, CSS and JavaScript App
              </span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Deployment</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Repo</button>
								</a>
							</div>
						</div>
					</div>

          {/* item 4 */}
					<div style={{backgroundImage: `url(${PizzaHunt})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
					
          	{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
                HTML, CSS and JavaScript App
              </span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Deployment</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Repo</button>
								</a>
							</div>
						</div>
					</div>

          {/* item 5 */}
					<div style={{backgroundImage: `url(${PizzaHunt})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
					
          	{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
                HTML, CSS and JavaScript App
              </span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Deployment</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Repo</button>
								</a>
							</div>
						</div>
					</div>

          {/* item 6 */}
					<div style={{backgroundImage: `url(${PizzaHunt})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
					
          	{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
                HTML, CSS and JavaScript App
              </span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Deployment</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Repo</button>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Work;
