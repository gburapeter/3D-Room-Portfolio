import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
import { SheetProvider, PerspectiveCamera } from "@theatre/r3f";
import { getProject, onChange } from "@theatre/core";
import Experience from "./components/Experience";
import { Loader, ScrollControls, Html } from "@react-three/drei";
import demoProjectState from "./textstate.json";
import { useEffect } from "react";
import useSound from "use-sound";
import Redbone from "../src/audio3.mp3";

// if (import.meta.env.DEV) {
// 	studio.initialize();
// 	studio.extend(extension);
// }

const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet(
	"Demo Sheet"
);

export default function App(props) {
	const [play, { stop }] = useSound(Redbone, {
		interrupt: true,
		volume: 0.3,
	});

	const playAudio = onChange(
		demoSheet.sequence.pointer.position,
		(position) => {
			if (position > 8.3) {
				playAudio();
				play();
			}
		}
	);

	useEffect(() => {
		stop();
	}, []);

	const [pages, setPages] = useState(0);
	const [enabled, setEnabled] = useState(false);
	return (
		<>
			<Loader />

			<Canvas shadows>
				<ScrollControls
					enabled={enabled}
					pages={pages}
					damping={1}
					maxSpeed={0.1}
				>
					<SheetProvider sheet={demoSheet}>
						<PerspectiveCamera
							theatreKey="Camera"
							makeDefault
							position={[4.8, 7.8, 9.55]}
							rotation={[-0.7, 0.46, 0.36]}
							fov={75}
						/>

						<Experience
							setPages={setPages}
							setEnabled={setEnabled}
							stopFunction={stop}
						/>
					</SheetProvider>
				</ScrollControls>
			</Canvas>
		</>
	);
}
