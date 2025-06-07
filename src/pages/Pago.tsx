import OrderSummary from "./Products-catalog/OrderSummary";
import { useState } from "react";
import CheckoutForm from "./Products-catalog/CheckoutForm";
import PaymentMethods from "./Products-catalog/PaymentMethods";
import CheckoutItem from "./Products-catalog/CheckoutItem";
import Header from "../layouts/partials/header";

interface Producto {
  imagen: string;
  titulo: string;
  cantidad: number;
  precio: number;

}

const Pago: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([
    {
      imagen: "/src/assets/chikiwafer.png",
      titulo: "Caja de Chiki Wafer Fiesta",
      cantidad: 5,
      precio: 4.0,
    },
    {
      imagen: "/src/assets/chikiwafer.png",
      titulo: "Caja de Chiki Wafer Fiesta",
      cantidad: 1,
      precio: 4.0,
    },
    {
      imagen: "/src/assets/chikiwafer.png",
      titulo: "Caja de Chiki Wafer Fiesta",
      cantidad: 1,
      precio: 4.0,
    },
  ]);

  const subtotal = productos.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const handleCantidadChange = (index: number, nuevaCantidad: number) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].cantidad = nuevaCantidad;
    setProductos(nuevosProductos);
  };
  return (
    <>
      <Header title="Pago" />

      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6">

          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow overflow-x-auto max-h-[500px]">
            <div>
              <h2 className="text-2xl font-bold">Carrito de compras</h2>
              <div className="mt-5  border-t-2 border-black pt-4" />
            </div>

            <div className="min-w-[600px]">
              {productos.map((item, index) => (
                <CheckoutItem
                  key={index}
                  {...item}
                  onCantidadChange={(nuevaCantidad) => {
                    const nuevos = [...productos];
                    nuevos[index].cantidad = nuevaCantidad;
                    setProductos(nuevos);
                  }}
                  onEliminar={() => {
                    const nuevos = productos.filter((_, i) => i !== index);
                    setProductos(nuevos);
                  }}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow">
            <CheckoutForm />
            <OrderSummary subtotal={subtotal} />
            <PaymentMethods />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pago;