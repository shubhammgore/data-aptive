import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Pricing from '../pricing/Pricing';
import Testimonials from '../testimonials/Testimonials';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Pricing />
			<Testimonials />
		</div>
	);
};

export default Home;
