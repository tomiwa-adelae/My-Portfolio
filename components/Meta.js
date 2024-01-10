import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

Meta.defaultProps = {
	title: "Tomiwa Adelae",
	keywords:
		"Tomiwa, Adelae, Tomiwa Adelae, Adetomiwa, Adetomiwa Adelae, Portfolio, website, website developer, web, website development, programmer, programming, backend, frontend, full stack, stack",
	description:
		"Welcome to Tomiwa Adelae digital showcase! Tomiwa Adelae is a passionate website developer dedicated to crafting immersive online experiences. Through a blend of creativity and technical expertise, my portfolio encapsulates a diverse range of projects, from sleek corporate websites to dynamic e-commerce platforms. With a focus on user-centric design and cutting-edge technologies, I bring ideas to life and empower businesses to thrive in the digital realm. Explore my work, delve into my skills, and let's collaborate to turn your vision into reality.",
};

export default Meta;
