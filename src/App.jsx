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
import { Environment, Loader, ScrollControls, Html } from "@react-three/drei";
import { Leva } from "leva";
import demoProjectState from "./guccistate.json";
import { useEffect } from "react";
import useSound from "use-sound";

import ShookOnes from "../src/audio.mp3";
import Promoe from "../src/song2.mp3";
import Redbone from "../src/audio3.mp3";

import { useState } from "react";
import { useRef } from "react";
import { Overlay } from "./components/Overlay";
if (import.meta.env.DEV) {
	studio.initialize();
	studio.extend(extension);
}

// our Theatre.js project sheet, we'll use this later

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

// demoSheet.sequence.attachAudio({ source: "./audio.mp3" }).then(() => {
// 	console.log("Audio loaded!");
// });

export default function App(props) {
	const [play, { stop }] = useSound(Redbone, {
		interrupt: true,
		volume: 0.3,
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
		console.log("donefr");
		stop();
	};
	const startbro = () => {
		demoSheet.sequence.play().then(() => playgang());
	};
	return (
		<>
			<Loader />
			{/* <button onClick={() => startbro()}>asd</button> */}
			{/* <Leva fill /> */}
			{/* <div class="first-move section-margin"></div>

			<section class=" section left">
				<div class="progress-wrapper progress-bar-wrapper-left">
					<div class="progress-bar"></div>
				</div>

				<div class="section-intro-wrapper">
					<h1 class="section-title">
						<span class="section-title-text">About Me</span>
						<div class="section-title-decoration styleOne"></div>
						<div class="section-title-decoration styleTwo"></div>
						<div class="section-title-decoration styleThree"></div>
					</h1>
					<span class="section-number">01</span>
				</div>

				<div class="section-detail-wrapper">
					<h3 class="section-heading">Hello!</h3>
					<p class="section-text">
						Hi there 👋! I'm a third-year digital media student from UK
						currently studying in Germany. My dream is to work for Disney
						or Pixar one day.
					</p>
					<p class="section-text">
						{" "}
						I love creating art and playing with my cats! I also like
						drinking bubble tea and going for hikes! Totally hippie lol
						✌️. Welcome to my portfolio!
					</p>
					<h3 class="section-heading">Lorem Ipsum</h3>
					<p class="section-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
						expedita qui quae officiis, magni velit iste repellat
						consequuntur temporibus. Quasi atque officia iste beatae
						rerum, harum itaque accusamus. At, natus?
					</p>{" "}
					<h3 class="section-heading">Lorem Ipsum</h3>
					<p class="section-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
						expedita qui quae officiis, magni velit iste repellat
						consequuntur temporibus. Quasi atque officia iste beatae
						rerum, harum itaque accusamus. At, natus?
					</p>{" "}
				</div>
			</section> */}

			{/* <div class="second-move section-margin"></div>

			<section class=" section right">
				<div class="progress-wrapper progress-bar-wrapper-right">
					<div class="progress-bar blue-background"></div>
				</div>

				<div class="section-intro-wrapper blue-text blue-border">
					<h1 class="section-title blue-text blue-border">
						<span class="section-title-text blue-text">My Work</span>
						<div class="section-title-decoration styleOne blue-border"></div>
						<div class="section-title-decoration styleTwo blue-border"></div>
						<div class="section-title-decoration styleThree blue-background blue-border"></div>
					</h1>
					<span class="section-number blue-text">02</span>
				</div>

				<div class="section-detail-wrapper">
					<h3 class="section-heading">Candycane Village</h3>
					<p class="section-text">
						This project is in progress but it's about a super colorful
						village where the entire world including the people are
						candies. So far the story is that they are set out to explore
						their "space" only to realize it's a human that will try to
						destroy them.
					</p>
					<h3 class="section-heading">Rebecca's Reddish Radishes</h3>
					<p class="section-text">
						Oh what's that? Why, it's a red radish! Oop, another one! In
						this playful and comedy animation, Rebecca, a young farmer,
						decided to plant radishes for the first time, but there is a
						big twist!
					</p>
					<h3 class="section-heading">Flora</h3>
					<p class="section-text">
						A heartwarming story about a little orphan girl who tries to
						find her way back home.
					</p>
				</div>
			</section> */}
			<Canvas
				// flat
				shadows
			>
				<ScrollControls pages={19} damping={1} maxSpeed={0.1}>
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
