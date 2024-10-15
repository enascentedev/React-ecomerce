// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import Product from './pages/ProductPage';
import ProductDetail from './components/Produtos/ProductDetail';
import "./assets/index.css";

function App() {
	return (
		<Router>

			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/produtos" element={<Product />} />
				<Route path="/produto/:id" element={<ProductDetail />} /> {/* Página de detalhes do produto */}
			</Routes>

		</Router>
	);
}

export default App;