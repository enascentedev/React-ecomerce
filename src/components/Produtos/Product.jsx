import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importo axios para fazer a requisição HTTP

function Product() {
	const [products, setProducts] = useState([]); // Estado para armazenar os produtos
	const [loading, setLoading] = useState(true); // Estado para verificar se os dados estão carregando
	const [error, setError] = useState(null); // Estado para capturar erros na requisição

	// useEffect para buscar os produtos assim que o componente for montado
	useEffect(() => {
		axios.get('http://localhost:5000/produtos') // Faço uma requisição GET para a rota /produtos
			.then((response) => {
				setProducts(response.data); // Atualizo o estado com os produtos recebidos
				setLoading(false); // Quando os produtos são recebidos, desativo o estado de loading
			})
			.catch((error) => {
				setError('Erro ao buscar produtos.'); // Caso ocorra algum erro, defino a mensagem de erro
				setLoading(false); // Desativo o loading mesmo em caso de erro
			});
	}, []); // O array vazio faz com que o useEffect execute apenas uma vez após a montagem do componente

	// Se estiver carregando, mostro uma mensagem de carregamento
	if (loading) {
		return <p>Carregando produtos...</p>;
	}

	// Se houver erro, mostro a mensagem de erro
	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">Produtos</h2>

				<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{/* Mapeio os produtos recebidos da API */}
					{products.map((product) => (
						<div key={product.id} className="group relative">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
								<img
									alt={product.nome}
									src={product.imagem} 
									className="h-full w-full object-cover object-center lg:h-full lg:w-full"
								/>
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-sm text-gray-700">
										<a href={`/produto/${product.id}`}> {/* Simulo um link para a página do produto */}
											<span aria-hidden="true" className="absolute inset-0" />
											{product.nome} {/* Nome do produto */}
										</a>
									</h3>
									<p className="mt-1 text-sm text-gray-500">{product.categoria}</p> {/* Categoria do produto */}
								</div>
								<p className="text-sm font-medium text-gray-900">R$ {product.preco.toFixed(2)}</p> {/* Preço do produto */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Product;
