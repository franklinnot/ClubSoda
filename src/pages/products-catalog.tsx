import ProductCard from "./Products-catalog/ProductsCard";
import Header from "../layouts/partials/header";
import SidebarFiltros from "./Products-catalog/SidebarFiltros";
import { useState } from "react";

export default function ProductsCatalog() {
  const [filtroCategorias, setFiltroCategorias] = useState<string[]>([]);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(300);

  const productos = [
    { nombre: "Caja de galletas tentación", precio: 25.99, categoria: "Galletas Dulces" },
    { nombre: "Caja de Chiki Wafer Fiesta", precio: 10.2, categoria: "Wafers" },
    { nombre: "Galleta Soda Gourmet", precio: 10.2, categoria: "Galletas Saladas" },
    { nombre: "Panetón San Jorge", precio: 10.2, categoria: "Panetones" },
    { nombre: "Caja de Chiki Wafer Fiesta", precio: 10.2, categoria: "Wafers" },
    { nombre: "Cabellito San Jorge", precio: 10.2, categoria: "Pastas" },
  ];

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
        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 p-4 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] overflow-auto bg-white z-10">
          <SidebarFiltros
            onCategoriaChange={setFiltroCategorias}
            onPrecioChange={(min, max) => {
              setPrecioMin(min);
              setPrecioMax(max);
            }}
          />
        </aside>

        {/* Catálogo */}
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
                  cantidad={1}
                  Agregar={() => alert("Agregado")}
                  Incrementar={() => console.log("Aumentar")}
                  Disminuir={() => console.log("Disminuir")}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
