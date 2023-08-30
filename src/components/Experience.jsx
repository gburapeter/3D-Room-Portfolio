import {
	Center,
	Environment,
	OrbitControls,
	OrthographicCamera,
	PerspectiveCamera,
	useGLTF,
} from "@react-three/drei";
import { Suspense } from "react";
import { ROOMGO } from "../Roomscalednew-v2";

import { Html, useProgress } from "@react-three/drei";
import { useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import PacmanLoader from "react-spinners/PacmanLoader";
import { PleaseWork } from "../Roomscaledgogo-v1";
const Loader = () => {
	const { progress, loaded, total } = useProgress();

	// useFrame(() => {

	// 	console.log(total);
	// 	// cubeRef.current.rotation.y += 0.01;
	// });

	return <Html center>{progress} % loaded</Html>;
};
export default function Experience() {
	// const { position } = useControls("light", {
	// 	position: {
	// 		value: { x: 1, y: 1, z: 0 },
	// 		step: 0.01,
	// 	},
	// });
	const currentSheet = useCurrentSheet();
	// demoSheet.project.ready.then(() =>
	// 	demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 15] })
	// );
	// useFrame(() => {
	// 	console.log(currentSheet.sequence);
	// }, []);

	return (
		<>
			{/* <Perf position="top-left" /> */}
			<color args={["#C4F7F9"]} attach={"background"} />
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
