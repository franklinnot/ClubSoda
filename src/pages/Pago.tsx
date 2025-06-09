import { useState, useEffect } from "react";
import OrderSummary from "./Products-catalog/OrderSummary";
import CheckoutForm from "./Products-catalog/CheckoutForm";
import PaymentMethods from "./Products-catalog/PaymentMethods";
import CheckoutItem from "./Products-catalog/CheckoutItem";
import Header from "../layouts/partials/header";
import type { ISaleDetail } from "../classes/interfaces/isaleDetail";
import { obtenerCarrito, guardarCarrito } from "../utils/carrito";
import { guardarVenta } from "../utils/ventas";
import { Status } from "../classes/enums/status";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";

const Pago: React.FC = () => {
  const navigate = useNavigate();

  const estado = Status.PROGRESO;
  const [productos, setProductos] = useState<ISaleDetail[]>([]);
  const [tipoEntrega, setTipoEntrega] = useState<"delivery" | "recojo">("delivery");
  const [metodoPago, setMetodoPago] = useState("Tarjeta");
  const [total, setTotal] = useState(0);
  const [stars, setStars] = useState(0);

  const [district, setDistrict] = useState("");
  const [direccion, setDireccion] = useState("");
  const [referencia, setReferencia] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [fechaSeleccionada, setFechaSeleccionada] = useState("");

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "information";
  } | null>(null);

  useEffect(() => {
    const carrito = obtenerCarrito();
    setProductos(carrito);
    const calculoTotal = carrito.reduce((acc, item) => acc + item.subtotal, 0);
    setTotal(calculoTotal);
  }, []);

  const handlePagar = () => {
    console.log("Pagar presionado"); // Confirmación en consola

    if (tipoEntrega === "delivery") {
      const datosEntrega = {
        district,
        address: `${direccion} (${referencia})`,
        phone: celular,
        email,
      };
      guardarVenta(tipoEntrega, productos, metodoPago, total, datosEntrega, estado, stars);
    } else {
      const datosEntrega = {
        fecha: fechaSeleccionada,
      };
      guardarVenta(tipoEntrega, productos, metodoPago, total, datosEntrega, estado, stars);
    }

    setToast({
      message: "Compra realizada con éxito",
      type: "success",
    });
    setTimeout(() => {
      navigate("/products/catalog");
    }, 2000);
  };

  const handleSeguirComprando = () => {
    navigate("/products/catalog");
  };

  const subtotal = productos.reduce((acc, item) => acc + item.subtotal, 0);

  const handleCantidadChange = (index: number, nuevaCantidad: number) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index].quantity = nuevaCantidad;
    nuevosProductos[index].subtotal = nuevosProductos[index].product.price * nuevaCantidad;
    setProductos(nuevosProductos);
    guardarCarrito(nuevosProductos);
  };

  const handleEliminar = (index: number) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
    guardarCarrito(nuevosProductos);
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
        />
      )}

      <Header title="Pago" />

      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow overflow-x-auto max-h-[500px]">
            <div>
              <h2 className="text-2xl font-bold">Carrito de compras</h2>
              <div className="mt-5 border-t-2 border-black pt-4" />
            </div>

            <div className="min-w-[600px]">
              {productos.map((item, index) => (
                <CheckoutItem
                  key={index}
                  imagen={item.product.url}
                  titulo={item.product.name}
                  cantidad={item.quantity}
                  precio={item.product.price}
                  onCantidadChange={(cantidad) => handleCantidadChange(index, cantidad)}
                  onEliminar={() => handleEliminar(index)}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow">
            <CheckoutForm
              tipoEntrega={tipoEntrega}
              setTipoEntrega={setTipoEntrega}
              district={district}
              setDistrict={setDistrict}
              direccion={direccion}
              setDireccion={setDireccion}
              referencia={referencia}
              setReferencia={setReferencia}
              celular={celular}
              setCelular={setCelular}
              email={email}
              setEmail={setEmail}
              fechaSeleccionada={fechaSeleccionada}
              setFechaSeleccionada={setFechaSeleccionada}
              stars={stars}
              setStars={setStars}
            />

            <OrderSummary subtotal={subtotal} />

            <PaymentMethods
              onPagar={handlePagar}
              metodoPago={metodoPago}
              setMetodoPago={setMetodoPago}
              onSeguirComprando={handleSeguirComprando} 

            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pago;
