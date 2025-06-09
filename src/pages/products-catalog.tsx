import ProductCard from "./Products-catalog/ProductsCard";
import Header from "../layouts/partials/header";
import SidebarFiltros from "./Products-catalog/SidebarFiltros";
import { useState } from "react";
import { Product } from "../classes/product";
import { agregarProductoAlCarrito } from "../utils/carrito";
import type { ISaleDetail } from "../classes/interfaces/isaleDetail";


export default function ProductsCatalog() {
  const [filtroCategorias, setFiltroCategorias] = useState<string[]>([]);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(300);
  const [cantidades, setCantidades] = useState<{[nombre: string]: number}>({});


  const productos = [
    { nombre: "Black out coco 8 pack", precio: 25.99, categoria: "Galletas Dulces",imagen: "/src/assets/blackout.png" },
    { nombre: "Caja de Chiki Wafer Fiesta", precio: 10.2, categoria: "Wafers", imagen: "/src/assets/chikiwafer.png" },
    { nombre: "Galleta Soda Gourmet", precio: 10.2, categoria: "Galletas Saladas",imagen: "/src/assets/Sodagourmet.png" },
    { nombre: "Panetón San Jorge", precio: 10.2, categoria: "Panetones", imagen: "/src/assets/Paneton.png" },
    { nombre: "Caja de Chiki Wafer Fiesta", precio: 10.2, categoria: "Wafers", imagen: "/src/assets/chikiwafer.png" },
    { nombre: "Cabellito San Jorge", precio: 10.2, categoria: "Pastas", imagen: "/src/assets/cabellito.jpeg" },
  ];

  const getCantidad = (nombre:string)=>cantidades[nombre]||1;

  const incrementrarCantidad = (nombre: string)=>{
    setCantidades(prev => ({
      ...prev,
      [nombre]: (prev[nombre]||1)+1
    }))
  }

  const disminuirCantidad = (nombre: string) => {
  setCantidades(prev => ({
    ...prev,
    [nombre]: Math.max(1, (prev[nombre] || 1) - 1)
  }));
};

  const productosFiltrados = productos.filter((producto) => {
    const dentroDePrecio = producto.precio >= precioMin && producto.precio <= precioMax;
    const dentroDeCategoria =
      filtroCategorias.length === 0 || filtroCategorias.includes(producto.categoria);
    return dentroDePrecio && dentroDeCategoria;
  });

  return (
    <>
      <Header title="Catálogo de Productos" />

      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/3 p-4 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] overflow-auto bg-white z-10">
          <SidebarFiltros
            onCategoriaChange={setFiltroCategorias}
            onPrecioChange={(min, max) => {
              setPrecioMin(min);
              setPrecioMax(max);
            }}
          />
        </aside>

        <main className="w-full lg:w-2/3 p-4">
          <div
            className={`
              flex gap-4 overflow-x-auto
              md:grid md:grid-cols-2 md:gap-6 md:overflow-visible
              lg:grid-cols-3
              xl:grid-cols-4
            `}
          >
            {productosFiltrados.map((p, index) => (
              <div key={index} className="flex-shrink-0 w-56 md:w-auto">
                <ProductCard
                  nombre={p.nombre}
                  precio={p.precio}
                  cantidad={getCantidad(p.nombre)}
                  Incrementar={()=> incrementrarCantidad(p.nombre)}
                  Disminuir ={()=> disminuirCantidad(p.nombre)}
                  imagen={p.imagen}
                  Agregar={()=>{
                    const cantidad = getCantidad(p.nombre)
                    const nuevoProducto: ISaleDetail= {
                      product: new Product({name: p.nombre, price:p.precio, url: p.imagen }),
                      quantity:cantidad,
                      subtotal: cantidad *p.precio
                    }
                    agregarProductoAlCarrito(nuevoProducto);
                    alert("producto agregado al carrito")

                  }}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
