import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

const PaymentMethods: React.FC = () => {
  return (
    <div className="text-center mt-6">
      <h4 className="text-lg font-bold mb-4 text-center">MÉTODOS DE PAGO</h4>

      <div className="flex justify-center items-center gap-4 text-2xl mb-4 border-t-2 border-black pt-4">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="flex sm:flex-row gap-1 text-4xl mb-1">
            <img
              src="/src/assets/yape.png"
              className="translate-y-4 w-full h-17 duration-300 ease-in-out hover:scale-110"
              alt="Yape"
            />
            <img
              src="/src/assets/BCP.png"
              className="w-full h-17 mt-4 transition duration-300 ease-in-out hover:scale-110"
              alt="BCP"
            />
          </div>

          <button  className="inline-flex justify-center items-center w-full py-2 bg-red-600  border border-transparent rounded-md font-medium text-base text-white hover:bg-red-400 transition duration-300 ease-in-out hover:scale-104">
            Pagar
          </button>

          <button className="inline-flex justify-center items-center w-full py-3 bg-white  border border-black rounded-md font-medium text-base text-black hover:bg-gray-100 transition duration-300 ease-in-out hover:scale-104">
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
