import LayoutAuth from "../../layouts/layout-auth";
import img1 from "../../assets/dashboard/1.png";
import img2 from "../../assets/dashboard/2.png";
import { productos } from "../Products-catalog/data/productos";
import ProductGridSection from "./product-grid";
import LargePromoBanner from "./banner";

export interface Product {
  id: string;
  nombre: string;
  precio: number;
  categoria: string[];
  imagen: string;
  descripcion: string;
  oldPrice?: number;
}

export default function Dashboard() {
  const productosWithOffers: Product[] = productos.map((p) => {
    if (p.id === "KJ5364") return { ...p, oldPrice: 5.5 };
    if (p.id === "F349J") return { ...p, oldPrice: 59.99 };
    return p;
  });

  const newArrivals = productosWithOffers.slice(0, 6);
  const bestSellers = productosWithOffers
    .filter((p) =>
      ["Galletas", "Pastas"].some((cat) => p.categoria.includes(cat))
    )
    .slice(0, 6);
  const specialOffers = productosWithOffers
    .filter((p) => p.oldPrice !== undefined)
    .slice(0, 6);
  const wafersProducts = productosWithOffers
    .filter((p) => p.categoria.includes("Wafers"))
    .slice(0, 6);

  return (
    <LayoutAuth title="Tienda Online" className="bg-gray-50" footer={true}>
      <div className="container mx-auto px-4 py-8">
        <LargePromoBanner
          imageUrl={img1}
          title="¡Sabor Tradicional, Precios Irresistibles!"
          description="Descubre la calidad y frescura que nos caracteriza en cada bocado."
          linkText="Ver Productos Destacados"
          linkHref="/products/catalog"
          backgroundColor="bg-amber-600"
        />

        <ProductGridSection
          title="Ofertas Exclusivas para ti"
          products={specialOffers}
          linkText="Ver todas las ofertas"
          linkHref="/productos?categoria=ofertas"
          className="bg-white p-6 rounded-lg shadow-md mb-10"
        />

        <LargePromoBanner
          imageUrl={img2}
          title="Panes Frescos, Directo a tu Mesa"
          description="Desde el clásico francés hasta nuestras especialidades artesanales. ¡Recién horneados!"
          linkText="Explorar Panes"
          linkHref="/productos?categoria=panes"
          backgroundColor="bg-green-700"
        />

        <ProductGridSection
          title="Novedades Recientes"
          products={newArrivals}
          linkText="Ver todas las novedades"
          linkHref="/productos?sort=novedades"
        />

        <ProductGridSection
          title="Los Favoritos de San Jorge"
          products={bestSellers}
          linkText="Ver los más vendidos"
          linkHref="/productos?sort=mas-vendidos"
        />

        {wafersProducts.length > 0 && (
          <ProductGridSection
            title="Wafers Crujientes y Deliciosos"
            products={wafersProducts}
            linkText="Descubre nuestros Wafers"
            linkHref="/productos?categoria=Wafers"
          />
        )}
      </div>
    </LayoutAuth>
  );
}
