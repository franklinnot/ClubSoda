import React from "react";

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
  return (
    <div className="text-center mt-6">
      <h4 className="text-lg font-bold mb-4 text-center">MÉTODOS DE PAGO</h4>

      <div className="flex justify-center items-center gap-4 text-2xl mb-4 border-t-2 border-black pt-4">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="flex sm:flex-row gap-1 text-4xl mb-1">
            <img
              src="/src/assets/yape.png"
              onClick={() => setMetodoPago("Yape")}
              className={`cursor-pointer w-full h-17 duration-300 ease-in-out hover:scale-110 ${metodoPago === "Yape" ? "ring-4 ring-purple-500 rounded" : ""
                }`}
              alt="Yape"
            />
            <img
              src="/src/assets/BCP.png"
              onClick={() => setMetodoPago("Tarjeta")}
              className={`cursor-pointer ml-7 w-full h-17 duration-300 ease-in-out hover:scale-110 ${metodoPago === "Tarjeta" ? "ring-4 ring-blue-500 rounded" : ""
                }`}
              alt="BCP"
            />
          </div>

          <button
            onClick={onPagar}
            className="inline-flex justify-center items-center w-full py-2 bg-red-600 border border-transparent rounded-md font-medium text-base text-white hover:bg-red-400 transition duration-300 ease-in-out hover:scale-104"
          >
            Pagar
          </button>

          <button
            onClick={onSeguirComprando}
            className="inline-flex justify-center items-center w-full py-3 bg-white border border-black rounded-md font-medium text-base text-black hover:bg-gray-100 transition duration-300 ease-in-out hover:scale-104">
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
