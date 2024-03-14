import Meta from "../components/Meta";
import Link from "next/link";

const days = () => {
	return (
		<div className="days">
			<Meta
				title="Tomiwa Adelae | D-Day"
				description="Keeps track of birthdays"
				keywords="tracking, birthdays, birthday track, d-day, day, app"
			/>
			<header>
				<Link href="/">
					<h3>
						Tomiwa <span className="text-gold">Adelae</span>
					</h3>
				</Link>
				<Link href="/contact">
					<div className="btn btn-gold">Get In Touch</div>
				</Link>
			</header>
			<div className="case-showcase">
				<img src="day.jpg" alt="" />
				<div className="details">
					<div className="intro">
						<h1>
							D-<span>Day</span>
						</h1>
						<h5>An app for keeping track of birthdays</h5>
					</div>
					<div
						onClick={() => {
							window.scroll({
								top: 420,
								behavior: "smooth",
							});
						}}
						className="icon-gold"
					>
						<i className="fas fa-angle-down"></i>
					</div>
					<div className="bottom-details">
						<h6>
							<span className="text-gold">Role</span> Full Stack
							Developer
						</h6>
						<h6>
							<span className="text-gold">Period</span> Middle
							2022
						</h6>
					</div>
				</div>
			</div>
			<div className="about-project">
				<div className="content">
					<h3>The Project</h3>
					<p>
						D-Day is a Full Stack web application that keeps track
						of birthdays and sends an email to both the birthday
						celebrant and you, the user.
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://d-day.herokuapp.com/"
					>
						<div className="btn btn-gold">
							Visit Website <i className="fas fa-angle-right"></i>
						</div>
					</a>
				</div>
			</div>
			<div className="project-design-gold">
				<div className="content">
					<h3>Design</h3>

					<div className="boxes">
						<div className="box one">
							<img src="dayone.jpg" alt="" />
						</div>
						<div className="box two">
							<img src="daytwo.jpg" alt="" />
						</div>
						<div className="box one">
							<img src="daythree.jpg" alt="" />
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
					Tomiwa <span className="text-gold">Adelae</span>
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
						href="https://twitter.com/tomiwaadelae"
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
						href="https://github.com/tomiwa-adelae"
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
				<p>&copy; 2024 Tomiwa Adelae. All Rights Reserved</p>
			</footer>
		</div>
	);
};

export default days;
