import { Link } from "react-router-dom";
import type { Product } from "../dashboard";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/producto/${product.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.oldPrice && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            -
            {(
              ((product.oldPrice - product.precio) / product.oldPrice) *
              100
            ).toFixed(0)}
            %
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between h-auto">
        {" "}
        {/* Adjusted padding */}
        <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
          {product.nombre}
        </h3>
        <p className="text-lg font-bold text-red-600">
          S/ {product.precio.toFixed(2)}
        </p>
        {product.oldPrice && (
          <p className="text-sm text-gray-500 line-through">
            S/ {product.oldPrice.toFixed(2)}
          </p>
        )}
      </div>
    </Link>
  );
}
