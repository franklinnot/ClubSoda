import SimpleProductCard from "./Simpleproductcard";
import { productos } from "./data/productos";

const CarruselProductos = () => {
  return (
    <div className="flex w-full justify-start">
      <div className="py-1 flex-row gap-4 sm:gap-6 lg:gap-8 ml-auto">
        <div className="text-center text-sm text-gray-600 mt-10">
          MAS PRODUCTOS...
        </div>
        {[...productos].map((producto, idx) => (
          <div
            key={idx}
            className="m-2 max-full border border-gray-300 rounded-lg  shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <SimpleProductCard 
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselProductos;
