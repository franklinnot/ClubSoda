import { useState, useEffect } from "react";
import OrderSummary from "./Products-catalog/OrderSummary";
import CheckoutForm from "./Products-catalog/CheckoutForm";
import PaymentMethods from "./Products-catalog/PaymentMethods";
import CheckoutItem from "./Products-catalog/CheckoutItem";
import type { ISaleDetail } from "../classes/interfaces/isaleDetail";
import { obtenerCarrito, guardarCarrito } from "../utils/carrito";
import { guardarVenta } from "../utils/ventas";
import { Status } from "../classes/enums/status";
import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";
import LayoutAuth from "../layouts/layout-auth";
import { deliveryFees } from "./Products-catalog/data/distritos";
import { IconInformation } from "../components/Icons";

const Pago: React.FC = () => {
  const navigate = useNavigate();
  const estado = Status.PROGRESO;
  const [sede, setSede] = useState("");
  const [tienda, setTienda] = useState("");

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
  useEffect(() => {
    const carrito = obtenerCarrito();
    const calculoSubtotal = carrito.reduce((acc, item) => acc + item.subtotal, 0);
    let deliveryExtra = 0;
    if (tipoEntrega === "delivery" && district) {
      deliveryExtra = deliveryFees[district] || 0;
    }
    setTotal(calculoSubtotal + deliveryExtra);
  }, [productos, tipoEntrega, district]);
  const handlePagar = () => {
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
    <LayoutAuth title="Carrito de Compras">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          className="z-50"
        />
      )}

      {/* Título general */}
      <div className="w-full max-w-5xl mx-auto mt-6 mb-6 border-b border-gray-300 pb-2">
        <h1 className="text-xl font-semibold text-gray-600">Carrito de compras</h1>
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Carrito de productos */}
        <div className="w-full lg:w-2/3">
          {productos.length === 0 ? (
            <div className="bg-white border border-gray-300 rounded-xl p-6 text-center text-gray-500">
              <div className="flex items-center justify-center gap-2 mb-4 text-gray-500">
                <IconInformation className="w-6 h-6 text-gray-400" />
                <p className="text-lg font-semibold">Tu carrito está vacío</p>
              </div>

              <button
                onClick={handleSeguirComprando}
                className="mt-2 inline-block bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition cursor-pointer"
              >
                Comprar ahora
              </button>
            </div>
          ) : (
            productos.map((item, index) => (
              <CheckoutItem
                key={index}
                imagen={item.product.url}
                titulo={item.product.name}
                cantidad={item.quantity}
                precio={item.product.price}
                onCantidadChange={(cantidad) => handleCantidadChange(index, cantidad)}
                onEliminar={() => handleEliminar(index)}
              />
            ))
          )}
        </div>


        {/* Formulario + resumen + pago */}
        <div className="w-full lg:w-1/3 rounded-lg flex flex-col gap-4 overflow-y-auto">
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
            sede={sede}
            setSede={setSede}
            tienda={tienda}
            setTienda={setTienda}
          />

          <OrderSummary
            subtotal={subtotal}
            deliveryFee={tipoEntrega === "delivery" ? deliveryFees[district] || 0 : 0}
          />

          <PaymentMethods
            onPagar={handlePagar}
            metodoPago={metodoPago}
            setMetodoPago={setMetodoPago}
            onSeguirComprando={handleSeguirComprando}
            setToast={setToast}
            tieneProductos={productos.length > 0}
          />
        </div>
      </div>
    </LayoutAuth>
  );
};

export default Pago;
