import ProductCard from "./Products-catalog/ProductsCard";
import Header from "../layouts/partials/header";
import SidebarFiltros from "./Products-catalog/SidebarFiltros";
import { useState } from "react";



export default function ProductsCatalog() {

  const [filtroCategorias, setFiltroCategorias] = useState<string[]>([]);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(300);

  const productos = [{

    nombre: "Caja de galletas tentación",
    precio: 25.99,
    categoria: "Galletas Dulces",
  

  },
  {
    nombre: "Caja de Chiki Wafer Fiesta",
    precio: 10.20,
    categoria: "Wafers",

  },
  {
    nombre: "Galleta Soda Gourmet",
    precio: 10.20,
    categoria: "Galletas Saladas",

  },
  {
    nombre: "Panetón San Jorge",
    precio: 10.20,
    categoria: "Panetones",

  },
  {
    nombre: "Caja de Chiki Wafer Fiesta",
    precio: 10.20,
    categoria: "Wafers",

  },
  {
    nombre: "Cabellito San Jorge",
    precio: 10.20,
    categoria: "Pastas",

  },
  
  ];
  const productosFiltrados = productos.filter((producto)=>{
    const dentroDePrecio=
      producto.precio >= precioMin && producto.precio <= precioMax;
    const dentroDeCategoria=
      filtroCategorias.length=== 0||
      filtroCategorias.includes (producto.categoria);
    return dentroDePrecio && dentroDeCategoria;
  });

  return (
<>

  <Header title="Catálogo de Productos" />
  
      
  
  <div className="flex flex-col lg:flex-row px-4 gap-6">

         <SidebarFiltros 
          onCategoriaChange={setFiltroCategorias}
          onPrecioChange={(min, max) => {
          setPrecioMin(min);
          setPrecioMax(max);
        }}
        
          />

        <div className="w-full">
            <div className="px-6 mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {productosFiltrados.map((p, index)=>(
              
              <ProductCard
                  key={index}
                  nombre={p.nombre}
                  precio={p.precio}
                  cantidad={1}
                  Agregar={() => alert("Agregado")}
                  Incrementar={() => console.log("Aumentar")}
                  Disminuir={() => console.log("Disminuir")}           
              />


              
            ))}
            
          </div>
        </div>
       

    </div>
</>

  );
}