import { useState } from "react";
import HistorySidebar from "../../../components/HistorySidebar";
import LayoutAuth from "../../../layouts/layout-auth";
import { request } from './records';
import RequestDetail from "./RequestDetail";

export default function RequestHistory() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedRequest = request.find((r) => r.id === selectedId);

  return (
    <LayoutAuth title="Historial de consultas">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 h-[calc(100vh-96px)] relative">
        {/* Sidebar de historial */}
        <HistorySidebar
          title="Historial de consultas"
          requests={request.map((p) => ({
            ...p,
            onClick: () => setSelectedId(p.id),
            isActive: p.id === selectedId,
          }))}
        />

        {/* Detalle de solicitud */}
        {selectedRequest && (
          <RequestDetail
            id={selectedRequest.id}
            estado={selectedRequest.estado}
            categoria={selectedRequest.categoria}
            fecha={selectedRequest.fecha}
            descripcion={selectedRequest.descripcion}
            respuesta={selectedRequest.respuesta}
            onClose={() => setSelectedId(null)}
          />
        )}

      </div>
    </LayoutAuth>
  );
}
