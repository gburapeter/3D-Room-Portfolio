import { Environment, useScroll } from "@react-three/drei";
import { Suspense } from "react";

import { Html, useProgress } from "@react-three/drei";
import { useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import { RoomPortfolio } from "../RoomPortfolio";
import { val } from "@theatre/core";
import { Overlay } from "./Overlay";
import "../App.css";

export default function Experience({ stopFunction }) {
	const sheet = useCurrentSheet();
	const scroll = useScroll();

	// our callback will run on every animation frame
	useFrame(() => {
		// the length of our sequence
		const sequenceLength = val(sheet.sequence.pointer.length);
		// console.log(sequenceLength);
		// update the "position" of the playhead in the sequence, as a fraction of its whole length
		sheet.sequence.position = scroll.offset * sequenceLength;
		// console.log(sheet.sequence.position);

		// end control
		// if (sheet.sequence.position > 54.6) {
		// 	// stopFunction();
		// }
	});

	return (
		<>
			{/* <Perf position="top-left" /> */}
			{/* <color args={["#C4F7F9"]} attach={"background"} /> */}
			{/* <OrbitControls /> */}
			<ambientLight color="#FFDAB9" intensity={2} />
			<directionalLight color="#FFD700" intensity={1} position={[1, 1, 0]} />
			<Environment preset="city" />
			{/* <Center> */}

			<Suspense
				fallback={
					// <Html center>
					// 	<PacmanLoader size={120} color="black" />
					// </Html>
					null
				}
			>
				<RoomPortfolio />
			</Suspense>
			<Overlay />
			{/* </Center> */}
		</>
	);
}
