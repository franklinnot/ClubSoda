import React, { useState } from "react";
import InputField from "../../components/InputField";
import { IconCard } from "../../components/Icons";

interface PaymentMethodsProps {
  onPagar: () => void;
  onSeguirComprando: () => void;
  metodoPago: string;
  setMetodoPago: (metodo: string) => void;
  setToast: (toast: { message: string; type: "success" | "error" } | null) => void;
  tieneProductos: boolean;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  onPagar,
  onSeguirComprando,
  metodoPago,
  setMetodoPago,
  setToast,
  tieneProductos
}) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [fechaExpiracion, setFechaExpiracion] = useState("");
  const [cvv, setCvv] = useState("");
  const [celularYape, setCelularYape] = useState("");
  const [codigoYape, setCodigoYape] = useState("");
  const handlePagarClick = () => {
    setMostrarModal(true);
  };

  const handleConfirmarPago = () => {
    const esYape = metodoPago === "Yape";
    const esTarjeta = metodoPago === "Tarjeta";

    const camposYapeCompletos =
      celularYape.trim().length === 9 && codigoYape.trim().length >= 6;

    const camposTarjetaCompletos =
      numeroTarjeta.trim().length === 16 &&
      fechaExpiracion.trim().length === 5 &&
      cvv.trim().length >= 3;

    if ((esYape && camposYapeCompletos) || (esTarjeta && camposTarjetaCompletos)) {
      setMostrarModal(false);
      onPagar(); // Esto guarda la venta y redirige
      setToast({
        message: "Compra realizada con éxito.",
        type: "success",
      });
    } else {
      setToast(null);
      setTimeout(() => {
        setToast({
          message: "Por favor, complete todos los campos requeridos.",
          type: "error",
        });
      }, 0);
    }
  };

  return (
    <div className="text-center mt-6">
      {tieneProductos && (
        <div className="grid grid-cols-2 gap-4 mt-3">
          <button
            onClick={onSeguirComprando}
            className="py-2 px-4 bg-white border border-gray-400 rounded-md font-medium text-sm text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
          >
            Seguir comprando
          </button>

          <button
            onClick={handlePagarClick}
            className="py-2 px-4 bg-red-500 text-white rounded-md font-medium text-sm hover:bg-red-500 transition duration-300 ease-in-out cursor-pointer"
          >
            Ir a pagar
          </button>
        </div>
      )}

      {mostrarModal && (
        <div
          style={{ background: "rgba(0,0,0,0.3)" }}
          className="fixed inset-0 flex items-center justify-center z-40"
        >
          <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-lg relative border border-gray-200">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setMostrarModal(false)}
            >
              &times;
            </button>

            <h2 className="text-base font-semibold text-gray-700 mb-4 text-left border-b pb-2 border-gray-200">
              Selecciona el método de pago
            </h2>

            <div className="flex justify-center gap-4 mb-6">
              <div className="flex flex-col items-center">
                <div
                  onClick={() => setMetodoPago("Yape")}
                  className={`w-12 h-12 aspect-square flex items-center justify-center cursor-pointer rounded-full 
                  ${metodoPago === "Yape" ? "bg-gray-200 scale-110 shadow-md" : "hover:bg-gray-100 hover:scale-105"} 
                  transition-all duration-200 ease-in-out`}
                >
                  <img
                    src="/src/assets/yape.png"
                    alt="Yape"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-xs mt-1 text-gray-600">Yape</span>
              </div>


              <div className="flex flex-col items-center">
                <div
                  onClick={() => setMetodoPago("Tarjeta")}
                  className={`w-12 h-12 aspect-square flex items-center justify-center cursor-pointer rounded-full 
                  ${metodoPago === "Tarjeta" ? "bg-gray-200 scale-110 shadow-md" : "hover:bg-gray-100 hover:scale-105"} 
                  transition-all duration-200 ease-in-out`}
                >
                  <IconCard className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-xs mt-1 text-gray-600">Tarjeta</span>
              </div>


            </div>

            {metodoPago === "Yape" && (
              <div className="space-y-4 text-left text-sm text-gray-700">
                <InputField
                  id="celularYape"
                  label="Celular"
                  type="tel"
                  value={celularYape}
                  onChange={(e) => setCelularYape(e.target.value)}
                  pattern="[0-9]{9}"
                  placeholder="Ej. 987654321"
                  maxLength={9}
                  required
                />
                <InputField
                  id="codigoYape"
                  label="Código de comprobación"
                  type="text"
                  value={codigoYape}
                  onChange={(e) => setCodigoYape(e.target.value)}
                  pattern=".{6,}"
                  placeholder="Código de 6 caracteres"
                  maxLength={6}
                  required
                />
              </div>
            )}

            {metodoPago === "Tarjeta" && (
              <div className="space-y-4 text-left text-sm text-gray-700">
                <InputField
                  id="numeroTarjeta"
                  label="Número de Tarjeta"
                  type="number"
                  value={numeroTarjeta}
                  onChange={(e) => setNumeroTarjeta(e.target.value)}
                  maxLength={16}
                />
                <div className="flex gap-4">
                  <InputField
                    id="fechaExpiracion"
                    label="MM/AA"
                    value={fechaExpiracion}
                    onChange={(e) => setFechaExpiracion(e.target.value)}
                    placeholder="MM/AA"
                    maxLength={5}
                    className="w-1/2"
                  />
                  <InputField
                    id="cvv"
                    label="CVV"
                    type="number"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={4}
                    className="w-1/2"
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleConfirmarPago}
              className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-semibold transition duration-300 cursor-pointer"
            >
              Confirmar pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
