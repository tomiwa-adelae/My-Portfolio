import Link from "next/link";
import Meta from "../components/Meta";

const contact = () => {
	return (
		<div className="contact">
			<Meta title="Tomiwa Adelae | Contact" />
			<header>
				<Link href="/">
					<h3>
						Tomiwa <span className="text-primary">Adelae</span>
					</h3>
				</Link>
				<Link href="/contact">
					<div className="btn btn-primary">Get In Touch</div>
				</Link>
			</header>
			<div className="content">
				<h1>Contact</h1>

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
				<a className="tel" href="tel: +234 802 783 6001">
					<h5>(+234) 802 783 6001</h5>
				</a>
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
					Tomiwa <span className="text-primary">Adelae</span>
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

export default contact;
