import ProductPurchased from "./ProductPurchased";
import StarRating from "../../../components/StarRating";
import { IconCloseCircle } from "../../../components/Icons";
import type { JSX } from "react";
import type { IDelivery } from "../../../classes/interfaces/idelivery";
import type { IProduct } from "../../../classes/interfaces/iproduct";

interface ProductoComprado {
  product: IProduct;
  quantity: number;
}

interface PurchaseDetailProps {
  id: string;
  productos: ProductoComprado[];
  cliente: IDelivery;
  onClose?: () => void;
}

export default function PurchaseDetail({
  id,
  productos,
  cliente,
  onClose,
}: PurchaseDetailProps): JSX.Element {
  return (
    <section
      className={`
        flex-1 h-full flex flex-col text-[#4a4848] overflow-y-auto
        fixed inset-0 bg-white z-50 md:z-10 p-4 shadow-xl
        md:static md:p-0 md:shadow-none md:px-2
      `}
    >
      {/* Encabezado */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold">
            Compra #{id}{" "}
            <span className="text-sm text-gray-500">
              ({productos.length} productos)
            </span>
          </h3>

          <div className="flex items-center gap-2">
            <StarRating storageKey={`rating-compra-${id}`} />
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-black text-xl block md:hidden"
              >
                <IconCloseCircle />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Productos */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-3 mb-4">
        {productos.map(({ product, quantity }, index) => (
          <ProductPurchased
            key={index}
            nombre={product.name}
            cantidad={quantity}
            precio={product.price}
            imagen={product.url}
          />
        ))}
      </div>

      {/* Cliente */}
      <h3 className="font-semibold mb-2">Detalles de la compra</h3>
      <div
        className="p-4 rounded-lg text-sm"
        style={{ border: "1px solid #8E8E8E" }}
      >
        <p>
          <strong>Teléfono:</strong> {cliente.phone}
        </p>
        <p>
          <strong>Correo:</strong> {cliente.email}
        </p>
        <p>
          <strong>Dirección:</strong> {cliente.address}
        </p>
        <p>
          <strong>Distrito:</strong> {cliente.district}
        </p>
      </div>
    </section>
  );
}
