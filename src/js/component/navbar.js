import React from "react";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<div className="derecha">
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse "
							id="navbarNavAltMarkup">
							<div>
								<div className="navbar-nav ">
									<a className="nav-link active" href="#">
										Home
										<span className="sr-only">
											(current)
										</span>
									</a>
									<a className="nav-link" href="#">
										About
									</a>
									<a className="nav-link" href="#">
										Services
									</a>
									<a
										className="nav-link"
										href="#"
										tabIndex="-1">
										Contact
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
