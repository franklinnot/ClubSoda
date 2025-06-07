import type { JSX } from "react";
import HistoryItemBase from "../../../components/HistoryItemBase";
import { IconCheckCircle, IconClock, IconCloseCircle } from "../../../components/Icons";


export interface PurchaseItemProps {
  id: string;
  total: string;
  productos: number;
  estado: "En progreso" | "Finalizado" | "Cancelado";
  fecha?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const estadoColors: Record<string, string> = {
  "En progreso": "text-yellow-500",
  "Finalizado": "text-green-500",
  "Cancelado": "text-red-500",
};

const estadoIcons: Record<string, JSX.Element> = {
  "En progreso": <IconClock className="text-yellow-500"/>,
  "Finalizado": <IconCheckCircle className="text-green-500"/>,
  "Cancelado": <IconCloseCircle className="text-red-500"/>,
};

export default function PurchaseItem({
  id,
  total,
  productos,
  estado,
  fecha,
  onClick,
  isActive = false,
}: PurchaseItemProps) {
  return (
    <HistoryItemBase onClick={onClick} isActive={isActive}>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-800">#{id}</p>
        <span className="flex items-center gap-1 text-sm font-medium">
          {estadoIcons[estado]}
          <span className={estadoColors[estado]}>{estado}</span>
        </span>
      </div>
      <p className="text-sm text-gray-700">{total}</p>
      <p className="text-xs text-gray-500">{productos} productos</p>
      {fecha && <p className="text-xs text-gray-400 mt-1">{fecha}</p>}
    </HistoryItemBase>
  );
}
