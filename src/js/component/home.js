import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
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
