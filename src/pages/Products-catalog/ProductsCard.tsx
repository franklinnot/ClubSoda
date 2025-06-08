// ProductCard.tsx
import type { FC } from "react";
import InputLabel from "../../components/InputLabel";
import PrimaryButton from "../../components/PrimaryButton";
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="border p-4 rounded-lg shadow-md flex flex-col items-center bg-white w-full max-w-sm mx-auto "
    >
      <img
      src={imagen}
      alt={nombre}
      className="w-full aspect-[4/3] bg-gray-100 mb-3 rounded-md" />
      <p className="font-semibold text-center text-base sm:text-lg">{nombre}</p>
      <InputLabel className="text-sm sm:text-base">S/. {precio}</InputLabel>

      <div className="flex items-center justify-center gap-2 my-3">
        <PrimaryButton
          onClick={Disminuir}
          className="bg-gray-300 rounded px-3 py-1 text-sm"
        >
          -
        </PrimaryButton>
        <InputLabel className="border px-3 py-1 rounded text-sm">
          {String(cantidad).padStart(2, "0")}
        </InputLabel>
        <PrimaryButton
          onClick={Incrementar}
          className="bg-red-500 text-white rounded px-3 py-1 text-sm"
        >
          +
        </PrimaryButton>
      </div>

      <PrimaryButton
        onClick={Agregar}
        className="bg-red-500 text-white w-full rounded px-3 py-2 text-sm"
      >
        Agregar
      </PrimaryButton>

      <InputLabel className="mt-2 text-xs text-center text-gray-600">
        {String(cantidad).padStart(2, "0")} agregado al carrito
      </InputLabel>
    </motion.div>
  );
};

export default ProductCard;
