import { useState } from "react";
import type { FC } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { motion } from "framer-motion";
import { IconHeart, IconPlus, IconMinus } from "../../components/Icons";

interface ProductCardProps {
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
  Agregar: () => void;
  Incrementar: () => void;
  Disminuir: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
  nombre,
  precio,
  cantidad,
  imagen,
  Agregar,
  Incrementar,
  Disminuir,
}) => {
  const [isFavorito, setIsFavorito] = useState(false);

  const toggleFavorito = () => {
    setIsFavorito((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-[220px] rounded-2xl overflow-hidden border border-slate-300 bg-white flex flex-col relative"
    >
      {/* Ícono de corazón en la esquina superior izquierda */}
      <div
        onClick={toggleFavorito}
        className="absolute top-2 right-2 cursor-pointer"
      >
        <IconHeart
          className={`transition-colors duration-200 ${isFavorito ? "text-red-500" : "text-gray-400"
            }`}
          fill={isFavorito ? "currentColor" : "none"}
        />
      </div>

      {/* Imagen */}
      <div className="w-full h-[140px] px-4 pt-2 pb-1">
        <img src={imagen} alt={nombre} className="w-full h-full object-contain" />
      </div>

      {/* Nombre y precio */}
      <div className="flex justify-between items-start px-3 pt-1">
        <p className="text-sm font-medium text-gray-800 w-[60%] line-clamp-2">
          {nombre}
        </p>
        <p className="text-sm font-semibold text-red-600 whitespace-nowrap">
          S/. {precio.toFixed(2)}
        </p>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={Disminuir}
            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
          >
            <IconMinus
              className=" text-gray-700"
              size={15} />
          </button>
          <span className="text-sm font-medium w-6 text-center">
            {String(cantidad).padStart(2, "0")}
          </span>
          <button
            onClick={Incrementar}
            className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600"
          >
            <IconPlus className=" text-white"
              size={15} />
          </button>
        </div>

        <PrimaryButton
          onClick={Agregar}
          disabled={cantidad === 0}
          className={`text-xs font-semibold px-4 py-1 rounded-md cursor-pointer ${cantidad === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 text-white"
            }`}
        >
          Agregar
        </PrimaryButton>
      </div>
    </motion.div>
  );
};

export default ProductCard;
