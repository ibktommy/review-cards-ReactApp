import React, { useState } from "react";
import people from "../data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
	// Setting the state for people array index
	const [index, setIndex] = useState(0);

	// Getting values from the the People Object
	const { name, job, image, text } = people[index];

	return (
		<>
			<section className="w-[45rem] shadow-md p-6 flex flex-col items-center gap-4">
				<div id="img">
					<img src={image} alt={name} />
					<FaQuoteRight id="quote-icon" />
				</div>
				<h3 className="font-bold text-3xl">{name}</h3>
				<p className="font-semibold uppercase text-2xl text-blue-400">{job}</p>
				<p className="text-center text-gray-500">{text}</p>
				<span>
					<button>
						<FaChevronLeft className="font-bold text-2xl text-blue-400 mr-3 active:text-blue-700" />
					</button>
					<button>
						<FaChevronRight className="font-bold text-2xl text-blue-400 ml-3 active:text-blue-700" />
					</button>
				</span>
				<button
					id="btn"
					className="py-2 px-4 text-blue-400 text-[1.4rem] font-medium border-blue-100 border-2 hover:bg-blue-400 hover:text-white transition-all"
				>
					Surprise Me
				</button>
			</section>
		</>
	);
};

export default Reviews;
