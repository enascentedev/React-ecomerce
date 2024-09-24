import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Home() {
	return (
		<div>
			<div className="h-40 w-full bg-base-100">
				<img className="w-full h-96 mx-auto"
					src="https://img.freepik.com/fotos-premium/carrinho-de-compras-vazio-com-copia-espaco_23-2148288272.jpg"
					alt="logo" />
			</div>
			<div className="flex flex-row card bg-base-100 w-3/4 shadow-xl mx-auto top-56">
				<figure>
					<img
						src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
						alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
				<figure>
					<img
						src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
						alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
