import { useState } from "react";
import HistorySidebar from "../../../components/HistorySidebar";
import LayoutAuth from "../../../layouts/layout-auth";
import PurchaseDetail from "./PurchaseDetail";
import { purchases } from './records';

export default function PurchaseHistory() {
 const [selectedId, setSelectedId] = useState<string | null>(null);
  const compraActiva = purchases.find(p => p.id === selectedId);

  return (
    <LayoutAuth title="Historial de compras">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 h-[calc(100vh-96px)] relative">
        <HistorySidebar
          title="Historial de compras"
          purchases={purchases.map((p) => ({
            ...p,
            productos: p.productos.length, 
            onClick: () => setSelectedId(p.id),
            isActive: p.id === selectedId,
          }))}
        />

        {compraActiva && (
          
          <PurchaseDetail
            id={compraActiva.id}
            productos={compraActiva.productos}
            cliente={compraActiva.cliente}
            onClose={() => setSelectedId(null)} 
          />
        )}
      </div>
    </LayoutAuth>
  );
}
