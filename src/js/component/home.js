import React from "react";



import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";
import { Card } from "./card";
import { CardContainer } from "./cardContainer";


export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<CardContainer />
			</div>
			<Footer />
		</div>
	);
}