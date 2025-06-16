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
  className="mt-1 grid-columns-2 grid-cols-2 w-[220px] rounded-xl overflow-hidden bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-red-400"
>
  <div className=" flex items-center gap-4 p-4">
    <img
      src={imagen}
      alt={nombre}
      className="w-24 h-24 object-contain rounded-lg"
    />
    <div className="flex flex-col justify-between flex-1">
      <p className="text-sm font-medium text-gray-800 line-clamp-2">{nombre}</p>
      <p className="text-sm font-semibold text-red-600">
        S/. {precio.toFixed(2)}
      </p>
    </div>
  </div>
</Link>
  );
};

export default SimpleProductCard