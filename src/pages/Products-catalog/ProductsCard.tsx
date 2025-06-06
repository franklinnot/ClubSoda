import type { FC } from 'react';
import InputLabel from '../../components/InputLabel';
import PrimaryButton from '../../components/PrimaryButton';
import {motion} from 'framer-motion'

interface ProductCardProps{
    nombre: string;
    precio: number;
    cantidad: number;
    Agregar: ()=> void;
    Incrementar: () => void;
    Disminuir : ()=> void;


}

const ProductCard: FC <ProductCardProps> =({nombre, precio, cantidad, Agregar, Incrementar, Disminuir})=>{
    return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="border p-4 rounded-lg shadow-md flex flex-col items-center w-full sm:max-w-xs justify-between"
    >
      <div className="w-full aspect-[4/3] bg-gray-100 mb-2 rounded-md" />
      <p className="font-semibold text-center">{nombre}</p>
      <InputLabel className="text-sm sm:text-base">S/. {precio}</InputLabel>

      <div className="flex items-center gap-2 my-2">
        <PrimaryButton onClick={Disminuir} className="bg-gray-300 rounded px-2 py-1 text-sm">-</PrimaryButton>
        <InputLabel className="border px-1 rounded">{String(cantidad).padStart(2, '0')}</InputLabel>
        <PrimaryButton onClick={Incrementar} className="bg-red-500 text-white rounded px-2 py-1 text-sm">+</PrimaryButton>
      </div>

      <PrimaryButton onClick={Agregar} className="bg-red-500 text-white w-full rounded px-2 py-1 text-sm">Agregar</PrimaryButton>
      <InputLabel className="mt-2 text-xs text-center text-gray-600">{String(cantidad).padStart(2, '0')} Agregado al carrito</InputLabel>
    </motion.div>

    )

}

export default ProductCard;