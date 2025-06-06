import OrderSummary from "./Products-catalog/OrderSummary";
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
  // 2. Array de productos tipado correctamente
  const productos: Producto[] = [
    {
      imagen: "/src/assets/torta_chocolate.png.png",
      titulo: "Caja de Chiki Wafer Fiesta",
      cantidad: 5,
      precio: 6.0,
    },
    {
      imagen: "/src/assets/torta_chocolate.png.png",
      titulo: "Caja de Chiki Wafer Fiesta",
      cantidad: 1,
      precio: 4.0,
    },
    {
      imagen: "/src/assets/torta_chocolate.png.png",
      titulo: "Caja de Chiki Wafer Fiesta",
      cantidad: 1,
      precio: 4.0,
    },
  ];

  // 3. Subtotal calculado
  const subtotal = productos.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <>
      <Header title="Pago" />
    
    <div className="p-6 flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6">

        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow overflow-y-auto max-h-[500px]">
          <div>
            <h2 className="text-2xl font-bold">Carrito de compras</h2>
            <div className="mt-5 border-t-2 border-black pt-4" />
          </div>

          

          {productos.map((item, index) => (
            <CheckoutItem key={index} {...item} />
          ))}
        </div>

        {/* Formulario, resumen y métodos de pago */}
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