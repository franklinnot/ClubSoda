import { useEffect, useState } from "react";
import HistorySidebar from "../../../components/HistorySidebar";
import LayoutAuth from "../../../layouts/layout-auth";
import PurchaseDetail from "./PurchaseDetail";
import { obtenerVentas, type IVenta } from "../../../utils/ventas";

export default function PurchaseHistory() {
  const [ventas, setVentas] = useState<IVenta[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const compraActiva = ventas.find(p => p.id === selectedId);

  useEffect(() => {
  const data = obtenerVentas();
  // Ordenar por fecha descendente
  const ordenadas = [...data].sort((a, b) => {
    return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
  });
  setVentas(ordenadas);

  // Mostrar automáticamente la más reciente
  if (ordenadas.length > 0) {
    setSelectedId(ordenadas[0].id);
  }
}, []);


  return (
    <LayoutAuth title="Historial de compras">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 h-[calc(100vh-96px)] relative">
        {/* Sidebar de historial */}
        <HistorySidebar
          title="Historial de compras"
          purchases={ventas.map((p) => ({
            id: p.id,
            total: `PEN S/. ${p.total.toFixed(2)}`,
            estado: p.estado,
            fecha: p.fecha,
            productos: p.productos.length,
            onClick: () => setSelectedId(p.id),
            isActive: p.id === selectedId,
          }))}
        />

        {/* Detalle de compra */}
        {compraActiva && (
          <PurchaseDetail
            id={compraActiva.id}
            productos={compraActiva.productos.map((prod) => ({
              product: prod.product,
              quantity: prod.quantity,
            }))}
            cliente={{
              phone: compraActiva.datosEntrega?.phone ?? "",
              email: compraActiva.datosEntrega?.email ?? "",
              address: compraActiva.datosEntrega?.address ?? "",
              district: compraActiva.datosEntrega?.district ?? "Desconocido",
            }}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>
    </LayoutAuth>
  );
}
