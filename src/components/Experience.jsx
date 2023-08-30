import {
	Center,
	Environment,
	OrbitControls,
	OrthographicCamera,
	PerspectiveCamera,
	useGLTF,
	useScroll,
} from "@react-three/drei";
import { Suspense } from "react";
import { ROOMGO } from "../Roomscalednew-v2";

import { Html, useProgress } from "@react-three/drei";
import { useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import PacmanLoader from "react-spinners/PacmanLoader";
import { PleaseWork } from "../Roomscaledgogo-v1";
import { val } from "@theatre/core";
const Loader = () => {
	const { progress, loaded, total } = useProgress();

	// useFrame(() => {

	// 	console.log(total);
	// 	// cubeRef.current.rotation.y += 0.01;
	// });

	return <Html center>{progress} % loaded</Html>;
};
export default function Experience({ stopFunction }) {
	// const { position } = useControls("light", {
	// 	position: {
	// 		value: { x: 1, y: 1, z: 0 },
	// 		step: 0.01,
	// 	},
	// });
	const sheet = useCurrentSheet();
	const scroll = useScroll();

	// our callback will run on every animation frame
	useFrame(() => {
		// the length of our sequence
		const sequenceLength = val(sheet.sequence.pointer.length);
		// update the "position" of the playhead in the sequence, as a fraction of its whole length
		sheet.sequence.position = scroll.offset * sequenceLength;
		// console.log(sheet.sequence.position);

		// end control
		// if (sheet.sequence.position > 54.6) {
		// 	// stopFunction();
		// }
	});
	// demoSheet.project.ready.then(() =>
	// 	demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 15] })
	// );
	// useFrame(() => {
	// 	console.log(currentSheet.sequence);
	// }, []);

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
				{<PleaseWork />}
			</Suspense>
			{/* </Center> */}
		</>
	);
}
