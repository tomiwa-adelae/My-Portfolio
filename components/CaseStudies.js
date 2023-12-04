import Link from "next/link";
import React from "react";

const CaseStudies = () => {
	return (
		<div className="casestudies">
			<div className="head">
				<strong>Case Studies</strong>
				<h4>Latest works</h4>
			</div>

			<div className="content">
				{/* <div className="file-case case">
               <img src="files.jpg" alt="Files App" />
               <Link href="files">
                  <div className="case-preview">
                     <span>
                        <h3>Files App</h3>
                        <p>あらゆる種類のファイルを追跡します</p>
                        <button className="btn btn-primary">
                           Case Study <i className="fas fa-angle-right"></i>
                        </button>
                     </span>
                  </div>
               </Link>
            </div> */}
				<div className="shop-case case">
					<img src="shop.jpg" alt="Shop App" />
					<Link href="shop">
						<div className="case-preview">
							<span>
								<h3>S-SHOP</h3>
								<p>
									An app for buying and selling in school
									environment
								</p>
								<button className="btn btn-white">
									Case Study{" "}
									<i className="fas fa-angle-right"></i>
								</button>
							</span>
						</div>
					</Link>
				</div>

				<div className="wings-case case">
					<img src="wings.jpg" alt="Prophetic wings" />
					<Link href="wings">
						<div className="case-preview">
							<span>
								<h3>Prophetic Wings</h3>
								<p>
									A website for daily loads of the word of God
								</p>
								<button className="btn btn-green">
									Case Study{" "}
									<i className="fas fa-angle-right"></i>
								</button>
							</span>
						</div>
					</Link>
				</div>

				<div className="day-case case">
					<img src="day.jpg" alt="D-Days" />
					<Link href="days">
						<div className="case-preview">
							<span>
								<h3>D-Days</h3>
								<p>An app for keeping track of birthdays</p>
								<button className="btn btn-primary">
									Case Study{" "}
									<i className="fas fa-angle-right"></i>
								</button>
							</span>
						</div>
					</Link>
				</div>

				<div className="pick-case case">
					<img src="pick.jpg" alt="Pick Me Fashions" />
					<Link href="pick">
						<div className="case-preview">
							<span>
								<h3>Pick Me Fashions</h3>
								<p>A shopping website</p>
								<button className="btn btn-dark">
									Case Study{" "}
									<i className="fas fa-angle-right"></i>
								</button>
							</span>
						</div>
					</Link>
				</div>

				<div className="bconcept-case case">
					<img src="bconcept.jpg" alt="Shop App" />
					<Link href="bconcept">
						<div className="case-preview">
							<span>
								<h3>B.one Concept</h3>
								<p>
									A website to showcase one&#39;s business in
									electronics and its accessories
								</p>
								<button className="btn btn-white">
									Case Study{" "}
									<i className="fas fa-angle-right"></i>
								</button>
							</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CaseStudies;
