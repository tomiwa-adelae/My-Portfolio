import Meta from "../components/Meta";
import Link from "next/link";

const acusa = () => {
	return (
		<div className="acusa">
			<Meta
				title="Tomiwa Adelae | ACUSA"
				description="Ajayi Crowther University Student Assembly
				website to showcase the activities and
				events of the whole university."
				keywords="ACUSA, ACUSA Media, Ajayi Crowther University, ACU"
			/>
			<header>
				<Link href="/">
					<h3>
						Tomiwa <span className="text-acusa-purple">Adelae</span>
					</h3>
				</Link>
				<Link href="/contact">
					<div className="btn btn-acusa-purple">Get In Touch</div>
				</Link>
			</header>
			<div className="case-showcase">
				<img src="acusa.jpg" alt="ACUSA" />
				<div className="details">
					<div className="intro">
						<h1>ACUSA</h1>
						<h5>
							Ajayi Crowther University Student Assembly website
							to showcase the activities and events of the whole
							university.
						</h5>
					</div>
					<div
						onClick={() => {
							window.scroll({
								top: 420,
								behavior: "smooth",
							});
						}}
						className="icon-acusa-purple"
					>
						<i className="fas fa-angle-down"></i>
					</div>
					<div className="bottom-details">
						<h6>
							<span className="text-acusa-purple">Role</span> Full
							Stack Developer
						</h6>
						<h6>
							<span className="text-acusa-purple">Period</span>{" "}
							Early 2024
						</h6>
					</div>
				</div>
			</div>
			<div className="about-project">
				<div className="content">
					<h3>The Project</h3>
					<p>
						Ajayi Crowther University Student Assembly website to
						showcase the activities and events of the whole
						university.
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://acusa.vercel.app/"
					>
						<div className="btn btn-acusa-purple">
							Visit Website <i className="fas fa-angle-right"></i>
						</div>
					</a>
				</div>
			</div>
			<div className="project-design-acusa-purple">
				<div className="content">
					<h3>Design</h3>

					<div className="boxes">
						<div className="box one">
							<img src="acusaone.jpg" alt="ACUSA" />
						</div>
						<div className="box two">
							<img src="acusatwo.jpg" alt="ACUSA" />
						</div>
						<div className="box one">
							<img src="acusathree.jpg" alt="ACUSA" />
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
					Tomiwa <span className="text-acusa-purple">Adelae</span>
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

				<p>&copy; Tomiwa Adelae 2024</p>
			</footer>
		</div>
	);
};

export default acusa;
