import React from "react";
import Feast from "../assets/work-imgs/feast.png";
import PizzaHunt from "../assets/work-imgs/pizzaHunt.png";
import ShopShop from "../assets/work-imgs/shopShop.png";
import BookSearch from "../assets/work-imgs/bookSearch.png";
import DeepThoughts from '../assets/work-imgs/deepThoughts.png'
import FoodWallet from '../assets/work-imgs/food-wallet.png'

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-blue-900 bg-[#5cdb94]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-blue-900 border-blue-900">
						Work
					</p>
					<p className="py-6">
						Here are some of my recently completed projects:
					</p>
				</div>

				{/* Container for Items */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* item 1 */}
					<div
						style={{ backgroundImage: `url(${FoodWallet})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								MERN Stack
							</span>
							<div className="pt-8 text-center">
								<a href="https://foodwallet.herokuapp.com/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Deployment
									</button>
								</a>
								<a href="https://github.com/Robcabobb/shop-shop">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Repo
									</button>
								</a>
							</div>
						</div>
					</div>
				
					{/* item 1 */}
					<div
						style={{ backgroundImage: `url(${ShopShop})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								MERN Stack
							</span>
							<div className="pt-8 text-center">
								<a href="https://shop-ecommerce-982349.herokuapp.com/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Deployment
									</button>
								</a>
								<a href="https://github.com/Robcabobb/shop-shop">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Repo
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* item 2 */}
					<div
						style={{ backgroundImage: `url(${DeepThoughts})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								MERN Stack
							</span>
							<div className="pt-8 text-center">
								<a href="https://frozen-inlet-71918.herokuapp.com/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Deployment
									</button>
								</a>
								<a href="https://github.com/Robcabobb/Book-Search-Engine">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Repo
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* item 3 */}
					<div
						style={{ backgroundImage: `url(${BookSearch})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								MERN Stack
							</span>
							<div className="pt-8 text-center">
								<a href="https://book-search-engine-11.herokuapp.com">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Deployment
									</button>
								</a>
								<a href="https://github.com/Robcabobb/Book-Search-Engine">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Repo
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* item 4 */}
					<div
						style={{ backgroundImage: `url(${PizzaHunt})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								Node.js, Express and MongoDB
							</span>
							<div className="pt-8 text-center">
								<a href="https://blooming-castle-80641.herokuapp.com/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Deployment
									</button>
								</a>
								<a href="https://github.com/Robcabobb/pizza-hunt">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Repo
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* item 5 */}
					<div
						style={{ backgroundImage: `url(${Feast})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider ">
								HTML, CSS and Javascript App
							</span>
							<div className="pt-8 text-center">
								<a href="https://robcabobb.github.io/feast/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Deployment
									</button>
								</a>
								<a href="https://github.com/Robcabobb/feast">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Repo
									</button>
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
