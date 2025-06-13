import React from "react";
import { Truck, ShoppingCart, Receipt } from "lucide-react";

interface OrderSummaryProps {
    subtotal: number;
    deliveryFee?: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, deliveryFee = 0 }) => {
    const total = subtotal + deliveryFee;

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-300 shadow space-y-6">
            <h3 className="font-semibold text-gray-600 border-b border-gray-300 py-2 mb-4">
                Resumen de la Orden
            </h3>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Subtotal:</span>
                </div>
                <span className="text-sm font-medium text-gray-700">S/. {subtotal.toFixed(2)}</span>
            </div>

            {deliveryFee > 0 && (
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Envío:</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">S/. {deliveryFee.toFixed(2)}</span>
                </div>
            )}

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                    <Receipt className="w-4 h-4 text-gray-700" />
                    <span>Total:</span>
                </div>
                <span className="text-sm font-medium text-gray-800">S/. {total.toFixed(2)}</span>
            </div>

        </div>
    );
};

export default OrderSummary;
