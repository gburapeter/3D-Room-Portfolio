import React from "react";
import { Canvas } from "@react-three/fiber";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import {
	SheetProvider,
	PerspectiveCamera,
	useCurrentSheet,
} from "@theatre/r3f";
import { getProject, onChange } from "@theatre/core";
import Experience from "./components/Experience";
import { Environment, Loader, ScrollControls } from "@react-three/drei";
import { Leva } from "leva";
import demoProjectState from "./guccistate.json";
import { useEffect } from "react";
import useSound from "use-sound";

import ShookOnes from "../src/audio.mp3";
import Promoe from "../src/song2.mp3";
import Redbone from "../src/audio3.mp3";

import { useState } from "react";
import { useRef } from "react";
if (import.meta.env.DEV) {
	studio.initialize();
	studio.extend(extension);
}

// our Theatre.js project sheet, we'll use this later

const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet(
	"Demo Sheet"
);

// demoSheet.sequence.attachAudio({ source: "./audio.mp3" }).then(() => {
// 	console.log("Audio loaded!");
// });

export default function App(props) {
	const [play, { stop }] = useSound(Redbone, {
		interrupt: true,
	});
	const [played, setPlayed] = useState(false);
	const hasPlayedChanged = useRef(false);
	const playAudio = onChange(
		demoSheet.sequence.pointer.position,
		(position) => {
			if (position > 8.3) {
				// console.log("asd");
				playAudio();

				play();
			}
		}
	);

	useEffect(() => {
		// demoSheet.project.ready.then(() =>
		// 	demoSheet.sequence.play().then(() => playgang())
		// );
		stop();
	}, []);

	const playgang = () => {
		console.log("done");
		stop();
	};
	const startbro = () => {
		demoSheet.sequence.play().then(() => playgang());
	};
	return (
		<>
			<Loader />
			<button onClick={() => startbro()}>asd</button>
			{/* <Leva fill /> */}
			<Canvas
				// flat
				shadows
			>
				{/* <Environment preset="sunset" /> */}
				<ScrollControls pages={15} damping={1} maxSpeed={0.3}>
					<SheetProvider sheet={demoSheet}>
						<PerspectiveCamera
							theatreKey="Camera"
							makeDefault
							position={[4.8, 7.8, 9.55]}
							rotation={[-0.7, 0.46, 0.36]}
							fov={75}
						/>
						<Experience stopFunction={stop} />
					</SheetProvider>
				</ScrollControls>
			</Canvas>
		</>
	);
}
