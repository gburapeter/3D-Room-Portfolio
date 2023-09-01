import { useEffect, useState } from "react";
import "./content.css";
import "./App.css";
export default function Content({ setPages, setEnabled }) {
	const [show, setShow] = useState(false);

	const setStart = () => {
		// setPages(19);
		// setEnabled(true);
		setShow(true);
	};

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
						<span className="italic font-bold">
							Hint: press the button
						</span>
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
					{/* <div className="links">
						<br />
						<a target="_blank" href="">
							LinkedIn
						</a>
						<br />
						<a target="_blank" href="">
							Github
						</a>
						<br />
						<a target="_blank" href="">
							Favorite song{" "}
						</a>
						<br />
					</div> */}
				</div>
			)}
		</div>
	);
}
