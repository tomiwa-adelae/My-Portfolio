import Meta from "../components/Meta";
import Link from "next/link";

const bconcept = () => {
	return (
		<div className="bconcept">
			<Meta
				title="Tomiwa Adelae | B.one Concept"
				description="We buy and sell"
				keywords="shops, S-SHOP app, E-ECOMMERCE app, app"
			/>
			<header>
				<Link href="/">
					<h3>
						Tomiwa{" "}
						<span className="text-bconcept-brown">Adelae</span>
					</h3>
				</Link>
				<Link href="/contact">
					<div className="btn btn-bconcept-brown">Get In Touch</div>
				</Link>
			</header>
			<div className="case-showcase">
				<img src="bconcept.jpg" alt="B.one Concept" />
				<div className="details">
					<div className="intro">
						<h1>
							B.one<span>Concept</span>
						</h1>
						<h5>
							A website to showcase one's business in electronics
							and its accessories
						</h5>
					</div>
					<div
						onClick={() => {
							window.scroll({
								top: 420,
								behavior: "smooth",
							});
						}}
						className="icon-bconcept-brown"
					>
						<i className="fas fa-angle-down"></i>
					</div>
					<div className="bottom-details">
						<h6>
							<span className="text-bconcept-brown">Role</span>{" "}
							Full Stack Developer
						</h6>
						<h6>
							<span className="text-bconcept-brown">Period</span>{" "}
							Late 2023
						</h6>
					</div>
				</div>
			</div>
			<div className="about-project">
				<div className="content">
					<h3>The Project</h3>
					<p>
						B.one Concept is a carefully designed project meant to
						solve the problem of the absence of an online presence
						for an Electronics company.
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://b-one-concept.vercel.app/"
					>
						<div className="btn btn-bconcept-brown">
							Visit Website <i className="fas fa-angle-right"></i>
						</div>
					</a>
				</div>
			</div>
			<div className="project-design-bconcept-brown">
				<div className="content">
					<h3>Design</h3>

					<div className="boxes">
						<div className="box one">
							<img src="bconceptone.jpg" alt="B.one Concept" />
						</div>
						<div className="box two">
							<img src="bconcepttwo.jpg" alt="B.one Concept" />
						</div>
						<div className="box one">
							<img src="bconceptthree.jpg" alt="B.one Concept" />
						</div>
					</div>
				</div>
			</div>

			<footer>
				<h2
					onClick={() => {
						window.scroll({
							top: 0,
							behavior: "smooth",
						});
					}}
				>
					Tomiwa <span className="text-bconcept-brown">Adelae</span>
				</h2>

				<div className="icons">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.facebook.com/adelae.tomiwa/"
					>
						<i className="fab fa-facebook"></i>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.instagram.com/thetommedia/"
					>
						<i className="fab fa-instagram"></i>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://twitter.com/TheTomMedia"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/tomiwa-ademola-6a08181b7/"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/AdemolaTomiwa"
					>
						<i className="fab fa-github"></i>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:adelaetomiwa6@gmail.com"
					>
						<i className="fas fa-envelope"></i>
					</a>
				</div>

				<p>&copy; Tomiwa Adelae 2023</p>
			</footer>
		</div>
	);
};

export default bconcept;
