import About from "../components/About";
import CaseStudies from "../components/CaseStudies";
import Icon from "../components/Icon";
import Interested from "../components/Interested";
import Meta from "../components/Meta";
import Showcase from "../components/Showcase";
import Skills from "../components/Skills";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Meta />
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
			<Showcase />
			<About />
			<CaseStudies />
			<Skills />
			<Interested />
			<Icon />
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
						rel="noopener noreferrer"
						target="_blank"
						href="mailto:adelaetomiwa6@gmail.com"
					>
						<i className="fas fa-envelope"></i>
					</a>
				</div>

				<p>&copy; 2024 Tomiwa Adelae. All Rights Reserved</p>
			</footer>
		</div>
	);
}
