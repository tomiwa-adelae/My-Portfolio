import Meta from "../components/Meta";
import Link from "next/link";

const shop = () => {
	return (
		<div className="shop">
			<Meta
				title="Tomiwa Adelae | S-SHOP"
				description="We buy and sell"
				keywords="shops, S-SHOP app, E-ECOMMERCE app, app"
			/>
			<header>
				<Link href="/">
					<h3>
						Tomiwa <span className="text-shop-grey">Adelae</span>
					</h3>
				</Link>
				<Link href="/contact">
					<div className="btn btn-shop-grey">Get In Touch</div>
				</Link>
			</header>
			<div className="case-showcase">
				<img src="shop.jpg" alt="" />
				<div className="details">
					<div className="intro">
						<h1>
							S-<span>SHOP</span>
						</h1>
						<h5>
							An app for buying and selling in school environment
						</h5>
					</div>
					<div
						onClick={() => {
							window.scroll({
								top: 420,
								behavior: "smooth",
							});
						}}
						className="icon-shop-grey"
					>
						<i className="fas fa-angle-down"></i>
					</div>
					<div className="bottom-details">
						<h6>
							<span className="text-shop-grey">Role</span> Full
							Stack Developer
						</h6>
						<h6>
							<span className="text-shop-grey">Period</span> Late
							2022
						</h6>
					</div>
				</div>
			</div>
			<div className="about-project">
				<div className="content">
					<h3>The Project</h3>
					<p>
						S-SHOP is a meticulously created E-Commerce app for the
						purpose of buying and selling in school environment.
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://sshop-customer.netlify.app/"
					>
						<div className="btn btn-shop-grey">
							Visit Website <i className="fas fa-angle-right"></i>
						</div>
					</a>
				</div>
			</div>
			<div className="project-design-shop-grey">
				<div className="content">
					<h3>Design</h3>

					<div className="boxes">
						<div className="box one">
							<img src="shopone.jpg" alt="" />
						</div>
						<div className="box two">
							<img src="shoptwo.jpg" alt="" />
						</div>
						<div className="box one">
							<img src="shopthree.jpg" alt="" />
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
					Tomiwa <span className="text-shop-grey">Adelae</span>
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

export default shop;
