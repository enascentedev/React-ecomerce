import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import { Link } from 'react-router-dom'; // Usar Link para navegação interna

function Product() {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Disparo a ação para buscar os produtos
  }, [dispatch]);

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
                    <Link to={`/produto/${product.id}`}> {/* Link para a página de detalhes */}
                      {product.nome}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.categoria}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">R$ {product.preco.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
