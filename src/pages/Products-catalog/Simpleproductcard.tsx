import type { FC } from "react";
import { Link } from "react-router-dom";

interface SimpleProductCardProps {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
}

const SimpleProductCard: FC<SimpleProductCardProps> = ({
  id,
  nombre,
  precio,
  imagen,
}) => {
  return (
    <Link
      to={`/producto/${id}`}
      className="w-[220px] rounded-xl overflow-hidden border border-slate-300 bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-red-400"
    >
      <div className="w-full h-[140px] p-4">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="px-4 pb-4">
        <p className="text-sm font-medium text-gray-800 line-clamp-2">{nombre}</p>
        <p className="text-sm font-semibold text-red-600 mt-1">
          S/. {precio.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default SimpleProductCard