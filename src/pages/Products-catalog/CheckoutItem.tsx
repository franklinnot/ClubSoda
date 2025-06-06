import React, { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";

// 1. Tipamos las props
interface CheckoutItemProps {
  imagen: string;
  titulo: string;
  cantidad: number;
  precio: number;
}


// 2. Usamos el tipo en el componente
const CheckoutItem: React.FC<CheckoutItemProps> = ({ imagen, titulo, cantidad:cantidadInicial, precio }) => {
  

  const [cantidad, setCantidad] = useState<number>(cantidadInicial);

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };
  
  
  return (
    
    <div className="items-center col-span-2 bg-white p-4 border border-gray-400 rounded-lg shadow-md flex items-center gap-10 mb-4 " >
      <img
        src={imagen}
        alt={titulo}
        className="w-24 h-24 object-cover rounded-md border"
      />
      

      <div className="flex-1">
        <h4 className="font-semibold text-lg">{titulo}</h4>
        <p className="">Producto</p>
      </div>

       <div className="flex items-center gap-2 w-40 justify-center">
        <button
          onClick={aumentar}
          className="px-2 bg-red-600 text-[12px] font-semibold  text-white rounded-sm font-bold"
        >
          +
        </button>
       
        <span className="text-black text-xl border-gray-400 font-bold border rounded px-4">{cantidad}</span>
         <button
          onClick={disminuir}
          className="px-3 text-[12px]  bg-[#e0e0e0] rounded font-bold"
        >
          -
        </button>
      </div>

      <div className="w-24 text-center font-bold">
        <p className="text-sm">S/. {precio.toFixed(2)}</p>
      </div>

      <div className="w-24 text-center font-bold">
        <p className="font-bold">S/. {(precio * cantidad).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
