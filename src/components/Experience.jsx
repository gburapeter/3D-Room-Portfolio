import { useScroll } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Html } from "@react-three/drei";
import { useCurrentSheet } from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import { Overlay } from "./TextContent/Overlay";
import Content from "./TextContent/Content";

import { RoomVersion1 } from "./Models/Roomversion1";

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
		// 21
		setPages(22);
		setShow(true);
	};
	return (
		<>
			<Html center>
				<Content setStart={setStart} show={show} />
			</Html>

			<ambientLight intensity={0.9} />
			<directionalLight />
			<Suspense fallback={null}>
				<RoomVersion1 />
			</Suspense>
			<Overlay />
		</>
	);
}
