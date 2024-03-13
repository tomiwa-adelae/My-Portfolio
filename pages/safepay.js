import Meta from "../components/Meta";
import Link from "next/link";

const safepay = () => {
	return (
		<div className="safepay">
			<Meta
				title="Tomiwa Adelae | Safepay"
				description="A fictitious banking application that is fully functional and does transactions in real time."
				keywords="Banking Application, Bank App, Safepay, Payment, Paying, Banking"
			/>
			<header>
				<Link href="/">
					<h3>
						Tomiwa <span className="text-safepay-blue">Adelae</span>
					</h3>
				</Link>
				<Link href="/contact">
					<div className="btn btn-safepay-blue">Get In Touch</div>
				</Link>
			</header>
			<div className="case-showcase">
				<img src="safepay.jpg" alt="safepay" />
				<div className="details">
					<div className="intro">
						<h1>Safepay</h1>
						<h5>
							A fictitious banking application that is fully
							functional and does transactions in real time.
						</h5>
					</div>
					<div
						onClick={() => {
							window.scroll({
								top: 420,
								behavior: "smooth",
							});
						}}
						className="icon-safepay-blue"
					>
						<i className="fas fa-angle-down"></i>
					</div>
					<div className="bottom-details">
						<h6>
							<span className="text-safepay-blue">Role</span> Full
							Stack Developer
						</h6>
						<h6>
							<span className="text-safepay-blue">Period</span>{" "}
							Early 2024
						</h6>
					</div>
				</div>
			</div>
			<div className="about-project">
				<div className="content">
					<h3>The Project</h3>
					<p>
						A fictitious banking application that is fully
						functional and does transactions in real time.
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://safepay-delta.vercel.app/"
					>
						<div className="btn btn-safepay-blue">
							Visit Website <i className="fas fa-angle-right"></i>
						</div>
					</a>
				</div>
			</div>
			<div className="project-design-safepay-blue">
				<div className="content">
					<h3>Design</h3>

					<div className="boxes">
						<div className="box one">
							<img src="safepayone.jpg" alt="safepay" />
						</div>
						<div className="box two">
							<img src="safepaytwo.jpg" alt="safepay" />
						</div>
						<div className="box one">
							<img src="safepaythree.jpg" alt="safepay" />
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
					Tomiwa <span className="text-safepay-blue">Adelae</span>
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

export default safepay;
