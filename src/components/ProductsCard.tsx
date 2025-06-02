import type { FC } from 'react';

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
        <div className="border p-4 rounded-lg shadow-md flex flex-col items-center w-65 justify-between">
            <div className="h-45 w-full bg-gray-100 mb-2"/>
                <p className="font-semibold text-center">{nombre}</p>
                <p className="text-gray-500">S/.{precio}</p>

                <div className="flex items-center space-x-2 my-2">
                    <button onClick={Disminuir} className="bg-gray-300 rounded px-2">-</button>
                    <span>{String(cantidad).padStart(2,'0')}</span>
                    <button onClick={Incrementar} className="bg-red-500 text-white rounded px-2">+</button>

                </div>

                <button onClick={Agregar} className='bg-red-500 text-white w-full rounded py-1'>Agregar</button>
                <p className="text-xs text-gray-500 mt-1">{String(cantidad).padStart(2, '0')} Agregado al carrito</p>
        </div>

    )

}

export default ProductCard;