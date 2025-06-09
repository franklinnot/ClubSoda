import React, { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";

interface CheckoutFormProps {
  tipoEntrega: "delivery" | "recojo";
  setTipoEntrega: (tipo: "delivery" | "recojo") => void;
  celular: string;
  setCelular: (valor: string) => void;
  email: string;
  setEmail: (valor: string) => void;
  direccion: string;
  setDireccion: (valor: string) => void;
  referencia: string;
  setReferencia: (valor: string) => void;
  district: string;
  setDistrict: (valor: string) => void;
  fechaSeleccionada: string;
  setFechaSeleccionada: (valor: string) => void;
}


const CheckoutForm: React.FC<CheckoutFormProps> = ({
  tipoEntrega,
  setTipoEntrega,
  celular,
  setCelular,
  email,
  setEmail,
  direccion,
  setDireccion,
  referencia,
  setReferencia,
  district,
  setDistrict,
  fechaSeleccionada,
  setFechaSeleccionada


}) => {

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold mb-4 text-center">TIPO DE ENTREGA</h3>

      <div className="flex justify-center gap-5 mt-4 pt-4 border-t-2 border-black">
        <PrimaryButton
          className={`transition duration-300 ease-in-out hover:scale-115 px-4 py-2 border rounded ${
            tipoEntrega === "delivery" ? "bg-red border-gray-500 shadow" : "border-gray-300 shadow"
          }`}
          onClick={() => setTipoEntrega("delivery")}
        >
          Delivery
        </PrimaryButton>

        <button
          className={`transition duration-300 ease-in-out hover:scale-115 px-4 py-2 border rounded ${
            tipoEntrega === "recojo" ? "bg-white border-gray-500 shadow" : "border-gray-400 shadow"
          }`}
          onClick={() => setTipoEntrega("recojo")}
        >
          Recojo
        </button>
      </div>

      {/* FORMULARIO SEGÚN EL MODO */}
      {tipoEntrega === "delivery" ? (
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Celular"
            value={celular}
            onChange={(e)=> setCelular(e.target.value)}
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <input
            type="text"
            placeholder="Correo electronico"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e)=> setDireccion(e.target.value)}
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <input
            type="text"
            placeholder="Referencia"
            value={referencia}
            onChange={(e)=> setReferencia(e.target.value)}
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
          <div>
            <label className="mb-1 font-medium block">Distrito</label>
            <select
              value ={district}
              onChange={(e)=> setDistrict(e.target.value)} 
              className="w-full bg-white p-2 border border-gray-400 shadow rounded"
            >
              <option value="">Selecciona un distrito</option>
              <option value="Distrito1">Distrito 1</option>
              <option value="Distrito2">Distrito 2</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          
          <input
            type="date"
            value={fechaSeleccionada}
            onChange={(e)=> setFechaSeleccionada(e.target.value)}
            className="w-full bg-white p-2 border border-gray-400 shadow rounded"
          />
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
