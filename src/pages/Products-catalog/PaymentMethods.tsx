import React, { useState } from "react";
import InputField from "../../components/InputField";

interface PaymentMethodsProps {
  onPagar: () => void;
  onSeguirComprando: () => void;
  metodoPago: string;
  setMetodoPago: (metodo: string) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  onPagar,
  onSeguirComprando,
  metodoPago,
  setMetodoPago,
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
    setMostrarModal(false);
    onPagar(); // Acción real de pagar
  };

  return (
    <div className="text-center mt-6">
      <div className="grid grid-cols-2 gap-4 mt-3">
        <button
          onClick={onSeguirComprando}
          className="py-2 px-4 bg-white border border-gray-400 rounded-md font-medium text-sm text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Seguir comprando
        </button>

        <button
          onClick={handlePagarClick}
          className="py-2 px-4 bg-red-500 text-white rounded-md font-medium text-sm hover:bg-red-500 transition duration-300 ease-in-out"
        >
          Ir a pagar
        </button>
      </div>



      {mostrarModal && (
        <div
          style={{ background: "rgba(0,0,0,0.3)" }}
          className="fixed inset-0 flex items-center justify-center z-40"
        >
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg"
              onClick={() => setMostrarModal(false)}
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold text-gray-700 mb-4 text-left">
              Selecciona el método de pago
            </h2>

            <div className="flex justify-center gap-4 mb-6">
              <img
                src="/src/assets/yape.png"
                alt="Yape"
                onClick={() => setMetodoPago("Yape")}
                className={`cursor-pointer w-24 h-16 object-contain duration-300 ease-in-out hover:scale-110 ${metodoPago === "Yape" ? "ring-4 ring-purple-500 rounded" : ""}`}
              />
              <img
                src="/src/assets/BCP.png"
                alt="Tarjeta"
                onClick={() => setMetodoPago("Tarjeta")}
                className={`cursor-pointer w-24 h-16 object-contain duration-300 ease-in-out hover:scale-110 ${metodoPago === "Tarjeta" ? "ring-4 ring-blue-500 rounded" : ""}`}
              />
            </div>

            {metodoPago === "Yape" && (
              <div className="space-y-4 text-left">
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
              <div className="space-y-4 text-left">
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
              className="mt-6 w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded transition duration-300"
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
