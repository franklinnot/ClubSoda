import SimpleProductCard from "./Simpleproductcard";
import { productos } from "./data/productos"; 

const CarruselProductos = () => {
  return ( 
    <div className="w-full overflow-x-hidden py-6 ">
      <div className="infinite-scroll flex w-max animate-infinite-scroll gap-4 sm:gap-6 md:gap-7 lg:gap-8">
        {[...productos, ...productos].map((producto, idx) => (
          <SimpleProductCard
            key={idx}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </div>
  );
};

export default CarruselProductos;
