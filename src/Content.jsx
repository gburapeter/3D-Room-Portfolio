import { useEffect, useState } from "react";
import "./content.css";
import "./App.css";
export default function Content({ show, setStart }) {
	return (
		<div
			className={`container transition duration-1000 ease-in-out
					
					blurableScreen  ${!show ? "backdrop-blur-md" : "backdrop-blur-none"}`}
		>
			{/* Personal info */}
			{!show && (
				<div
					className={`transition duration-1000 ease-in-out
					
					 ${!show ? "opacity-100" : "opacity-0"}`}
				>
					<div className="personalName">
						<h2>
							Ghiurutan-Bura
							<br />
							Péter
						</h2>

						<div className="role italic text-md/2 text-gray-800">
							Full-stack developer
						</div>
					</div>

					<div className="tutorial">
						<span className="italic font-bold">Hint: </span>
						<br />
						press the button
						<br />
						and slowly start scrolling
					</div>

					<div className="credits">
						<button
							className="font-bold bg-green-400 hover:bg-blue-900 transition-colors duration-200 hover:text-white rounded-full px-8 py-6 shadow-lg text-xl"
							onClick={() => setStart()}
						>
							Start journey
						</button>
					</div>

					<div className="socials flex flex-row gap-3 ">
						<a target="_blank" href="https://github.com/gburapeter">
							<img
								className="w-12 h-12 transition duration-200 ease-in-out hover:scale-110"
								src="/static/github-mark.png"
							/>
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/p%C3%A9ter-ghiurutan-bura-2765a41a2/"
						>
							<img
								className="w-12 h-12 transition duration-200 ease-in-out hover:scale-110"
								src="/static/linkedin.png"
							/>
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
