
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img className="h-48 w-full object-cover" src={product.imageUrl} alt={product.name} />
        <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-stone-800 mb-1">{product.name}</h3>
        <p className="text-stone-500 text-sm mb-4 h-10">{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-emerald-600">${product.price.toFixed(2)}</p>
          <button className="bg-stone-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors duration-300 transform group-hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
