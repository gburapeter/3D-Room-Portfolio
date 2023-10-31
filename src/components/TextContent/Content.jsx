import { useEffect, useState } from "react";
import "./content.css";
import "./style.css";
export default function Content({ show, setStart }) {
	return (
		<div
			className={`container transition duration-1000 ease-in-out
					
					blurableScreen  ${!show ? "backdrop-blur-md" : "backdrop-blur-none"}`}
		>
			{!show && (
				<div
					className={`transition duration-1000 ease-in-out
					
					 ${!show ? "opacity-100" : "opacity-0"}`}
				>
					<div className="personalName text-[#00547C]">
						<h2>
							Ghiurutan-Bura
							<br />
							Péter
						</h2>

						<div className="pt-2 role text-gray-900">
							Full-stack developer
						</div>
					</div>

					<div className="tutorial text-gray-900">
						<div className="flex flex-col items-center">
							<span className="text-[#00547C] hint font-extrabold">
								Hint:{" "}
							</span>
							<span className="text-left ">press the button</span>
							<div className="flex items-center ">
								<span className="mx-1">and</span>
							</div>
							<span className="text-left">keep scrolling slowly</span>
						</div>
					</div>

					<div className="grid place-items-center credits">
						<button
							className="border border-[hsla(203, 69%, 84%, 1)]  font-bold text-[#F3EADA] bg-[#00547C] hover:bg-blue-600 transition-colors duration-200 hover:text-black rounded-full px-8 py-6 shadow-lg text-xl"
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
