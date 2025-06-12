import ProductCard from "./ProductsCard";
import SidebarFiltros from "./SidebarFiltros";
import { useState } from "react";
import { Product } from "../../classes/product";
import { agregarProductoAlCarrito } from "../../utils/carrito";
import type { ISaleDetail } from "../../classes/interfaces/isaleDetail";
import LayoutAuth from "../../layouts/layout-auth";
import { productos } from "./data/productos";


export default function ProductsCatalog() {
  const [filtroCategorias, setFiltroCategorias] = useState<string[]>([]);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(300);
  const [cantidades, setCantidades] = useState<{ [nombre: string]: number }>({});

  const getCantidad = (nombre: string) => cantidades[nombre] || 1;

  const incrementrarCantidad = (nombre: string) => {
    setCantidades((prev) => ({
      ...prev,
      [nombre]: (prev[nombre] || 1) + 1,
    }));
  };

  const disminuirCantidad = (nombre: string) => {
    setCantidades((prev) => ({
      ...prev,
      [nombre]: Math.max(1, (prev[nombre] || 1) - 1),
    }));
  };

  const productosFiltrados = productos.filter((producto) => {
    const dentroDePrecio = producto.precio >= precioMin && producto.precio <= precioMax;

    const categoriasProducto = Array.isArray(producto.categoria)
      ? producto.categoria
      : [producto.categoria];

    const dentroDeCategoria =
      filtroCategorias.length === 0 ||
      categoriasProducto.some((cat) => filtroCategorias.includes(cat));

    return dentroDePrecio && dentroDeCategoria;
  });


  return (
    <LayoutAuth title="Catálogo de Productos">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-[280px] md:shrink-0">
          <SidebarFiltros
            onCategoriaChange={setFiltroCategorias}
            onPrecioChange={(min, max) => {
              setPrecioMin(min);
              setPrecioMax(max);
            }}
          />
        </div>

        {/* Contenedor de productos scrollable solo en escritorio */}
        <div className="flex-1 pr-2">
          <div className="grid gap-4 place-items-center grid-cols-[repeat(auto-fit,minmax(200px,1fr))] max-w-screen-lg mx-auto">
            {productosFiltrados.map((p, index) => (
              <ProductCard
                key={index}
                nombre={p.nombre}
                precio={p.precio}
                cantidad={getCantidad(p.nombre)}
                Incrementar={() => incrementrarCantidad(p.nombre)}
                Disminuir={() => disminuirCantidad(p.nombre)}
                imagen={p.imagen}
                Agregar={() => {
                  const cantidad = getCantidad(p.nombre);
                  const nuevoProducto: ISaleDetail = {
                    product: new Product({ name: p.nombre, price: p.precio, url: p.imagen }),
                    quantity: cantidad,
                    subtotal: cantidad * p.precio,
                  };
                  agregarProductoAlCarrito(nuevoProducto);
                  alert("Producto agregado al carrito");
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
}