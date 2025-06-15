import SectionHeader from "./product-grid/section-header";
import ProductCard from "./product-grid/product-card";
import type { Product } from "./dashboard";

interface ProductGridSectionProps {
  title: string;
  products: Product[];
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export default function ProductGridSection({
  title,
  products,
  linkText,
  linkHref,
  className,
}: ProductGridSectionProps) {
  if (!products || products.length === 0) return null; // Don't render if no products

  return (
    <section className={`mb-10 ${className}`}>
      <SectionHeader title={title} linkText={linkText} linkHref={linkHref} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
