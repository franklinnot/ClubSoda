import React, { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";

const CheckoutForm: React.FC = () => {
  const [modoEntrega, setModoEntrega] = useState<"delivery" | "recojo">("delivery");

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-4 text-center">TIPO DE ENTREGA</h3>

      <div className="flex justify-center gap-5 mt-4 pt-4 border-t-2 border-black">
        <PrimaryButton
          className={`transition duration-300 ease-in-out hover:scale-115 px-4 py-2 border rounded ${
            modoEntrega === "delivery" ? "bg-red border-gray-500 shadow" : "border-gray-300 shadow"
          }`}
          onClick={() => setModoEntrega("delivery")}
        >
          Delivery
        </PrimaryButton>

        <button
          className={`transition duration-300 ease-in-out hover:scale-115 px-4 py-2 border rounded ${
            modoEntrega === "recojo" ? "bg-white border-gray-500 shadow" : "border-gray-400 shadow"
          }`}
          onClick={() => setModoEntrega("recojo")}
        >
          Recojo
        </button>
      </div>

      {/* FORMULARIO SEGÚN EL MODO */}
      {modoEntrega === "delivery" ? (
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Celular"
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <input
            type="text"
            placeholder="Dirección"
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <input
            type="text"
            placeholder="Referencia"
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <div>
            <label className="mb-1 font-medium block">Distrito</label>
            <select className="w-full bg-white p-2 border border-gray-400 shadow rounded">
              <option value="">Selecciona un distrito</option>
              <option value="Distrito1">Distrito 1</option>
              <option value="Distrito2">Distrito 2</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nombres"
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <input
            type="text"
            placeholder="Apellidos"
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <input
            type="date"
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
