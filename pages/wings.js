import Meta from "../components/Meta";
import Link from "next/link";

const pick = () => {
	return (
		<div className="wings">
			<Meta
				title="Tomiwa Adelae | Prophetic wings"
				description="An online shopping website"
				keywords="pick me fashions, pick me, pick, app"
			/>
			<header>
				<Link href="/">
					<h3>
						Tomiwa <span className="text-green">Adelae</span>
					</h3>
				</Link>
				<Link href="/contact">
					<div className="btn btn-green">Get In Touch</div>
				</Link>
			</header>
			<div className="case-showcase">
				<img src="wings.jpg" alt="" />
				<div className="details">
					<div className="intro">
						<h1>
							Prophetic <span>Wings</span>
						</h1>
						<h5>A website for daily load of the Bible</h5>
					</div>
					<div
						onClick={() => {
							window.scroll({
								top: 420,
								behavior: "smooth",
							});
						}}
						className="icon-green"
					>
						<i className="fas fa-angle-down"></i>
					</div>
					<div className="bottom-details">
						<h6>
							<span className="text-green">Role</span> Full Stack
							Developer
						</h6>
						<h6>
							<span className="text-green">Period</span> Middle
							2021
						</h6>
					</div>
				</div>
			</div>
			<div className="about-project">
				<div className="content">
					<h3>The Project</h3>
					<p>
						Prophetic wings is a website for daily loads of the word
						of God by a great man of God, Mr Olanbiwoninu.
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://propheticwings.netlify.app/"
					>
						<div className="btn btn-green">
							Visit Website <i className="fas fa-angle-right"></i>
						</div>
					</a>
				</div>
			</div>
			<div className="project-design-green">
				<div className="content">
					<h3>Design</h3>

					<div className="boxes">
						<div className="box one">
							<img src="wingsone.jpg" alt="" />
						</div>
						<div className="box two">
							<img src="wingstwo.jpg" alt="" />
						</div>
						<div className="box one">
							<img src="wingsthree.jpg" alt="" />
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
					Tomiwa <span className="text-green">Adelae</span>
				</h2>

				<div className="icons">
					<a
						target="_blank"
						href="https://www.facebook.com/adelae.tomiwa/"
						rel="noopener noreferrer"
					>
						<i className="fab fa-facebook"></i>
					</a>
					<a
						target="_blank"
						href="https://www.instagram.com/thetommedia/"
						rel="noopener noreferrer"
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

export default pick;
