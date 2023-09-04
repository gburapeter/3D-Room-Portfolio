import { Environment, useScroll } from "@react-three/drei";
import { Suspense, useState } from "react";

import { Html, useProgress } from "@react-three/drei";
import { useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import { RoomPortfolio } from "./Models/RoomPortfolio";
import { val } from "@theatre/core";
import { Overlay } from "./TextContent/Overlay";
import Content from "./TextContent/Content";

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

			<ambientLight color="#FFDAB9" intensity={2} />
			<directionalLight color="#FFD700" intensity={1} position={[1, 1, 0]} />
			<Environment preset="city" />
			{/* )} */}
			<Suspense fallback={null}>
				<RoomPortfolio />
			</Suspense>
			<Overlay />
			{/* </Center> */}
		</>
	);
}
