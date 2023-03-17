import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="container d-inline-flex justify-content-center">
					<div className="row d-inline-flex">
						<Card tituloCard="Card Title 1" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem dolorem deserunt nulla quos autem nostrum harum illum, beatae quisquam nobis, dolorum officia delectus nisi iste et perferendis aliquid recusandae quaerat?"/>
						<Card tituloCard="Card Title 2" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque tenetur voluptatibus eum, corrupti dolorum dignissimos perspiciatis praesentium debitis quisquam, delectus nostrum reprehenderit. In labore inventore quos illo laborum. Excepturi, hic." />
						<Card tituloCard="Card Title 3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloremque commodi unde modi quis sunt fugiat tenetur deserunt maiores quos asperiores, repellendus, aperiam accusantium esse obcaecati possimus doloribus nemo eius?" />
						<Card tituloCard="Card Title 4" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur possimus incidunt consequatur. Libero recusandae officia alias quam dolores velit ducimus porro, error deleniti aut iusto, repellendus pariatur enim non explicabo!" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
};

export default Home;
