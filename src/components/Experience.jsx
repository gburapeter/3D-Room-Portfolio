import { Environment, OrbitControls, useScroll } from "@react-three/drei";
import { Suspense, useState } from "react";

import { Html, useProgress } from "@react-three/drei";
import { useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import { Overlay } from "./TextContent/Overlay";
import Content from "./TextContent/Content";
import { Roomv6 } from "../../Roomv6";

export default function Experience({ stopFunction, setPages, setEnabled }) {
	const sheet = useCurrentSheet();
	const scroll = useScroll();
	const [show, setShow] = useState(false);

	// our callback will run on every animation frame
	useFrame(() => {
		// the length of our sequence
		const sequenceLength = val(sheet.sequence.pointer.length);
		// update the "position" of the playhead in the sequence, as a fraction of its whole length
		sheet.sequence.position = scroll.offset * sequenceLength;
	});

	const setStart = () => {
		setEnabled(true);
		setPages(20);
		setShow(true);
	};
	return (
		<>
			<Html center>
				<Content setStart={setStart} show={show} />
			</Html>
			{/* <OrbitControls /> */}
			{/* <ambientLight color="#FFDAB9" intensity={0.5} /> */}
			{/* <ambientLight color="#FFDAB9" intensity={2} />
			<directionalLight color="#FFD700" intensity={1} position={[1, 1, 0]} />
			<Environment preset="city" /> */}
			{/* )} */}
			<Suspense fallback={null}>
				<Roomv6 />
			</Suspense>
			<Overlay />
			{/* </Center> */}
		</>
	);
}
