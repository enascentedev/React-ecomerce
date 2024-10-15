import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/produtos/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Produto não encontrado!');
      } finally {
        setLoading(false);
      }
    };
    fetchProductById();
  }, [id]);

  if (loading) {
    return <p>Carregando detalhes do produto...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <img
              src={product.imagem}
              alt={product.nome}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="lg:col-start-2 lg:row-start-1">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{product.nome}</h2>
            <p className="text-sm text-gray-500 mt-2">{product.categoria}</p>
            <p className="text-lg text-gray-900 font-semibold mt-4">R$ {product.preco.toFixed(2)}</p>
            <p className="mt-6 text-base text-gray-700">{product.descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
