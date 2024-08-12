import React from "react";
import Sandhya from "./assets/picture.jpeg";
import Button from "./Button";

const Hero = () => {
	return (
		<div className="flex items-center flex-col justify-center">
			<img
				src={Sandhya}
				alt=""
				className="flex rounded-full border-lg h-24 w-24 object-cover"
			/>
      <div className="text-center"/>
    
			<h1 className="text-2xl font-medium">Hi,I'm Sandhya♥</h1>
			<h2 className="text-lg font-normal">Fullstack Developer</h2>
			<p>
				I'm Sandhya, a fullstack developer with the goal of advancing my career
				and participating in inspiring projects. Here I present my work and my
				passion for web development.Let's shape digital solutions together and
				shape the future!
			</p>
			<div className="flex justify-center gap-4 mt-3">
				<Button button1="Contact Me" type="pink" icon="contact" />
				<Button button1="My project" type="purple" icon="github" />
			</div>
		</div>
	);
};

export default Hero;