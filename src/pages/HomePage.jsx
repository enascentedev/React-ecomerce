import React from 'react';
import Header from '../components/Layout/Header.jsx'
import Home from '../components/Layout/Home.jsx'

function HomePage() {
	return (
		<div className='flex flex-col gap-20'>
			<div className='h-20 flex flex-row justify-between'>
				<Header />
			</div>
			<div>
				<Home />
			</div>
		</div>

	);
}

export default HomePage;