import type { JSX } from "react";
import HistoryItemBase from "../../../components/HistoryItemBase";
import { IconCheckCircle, IconClock } from "../../../components/Icons";

export interface RequestItemProps {
  id: string;
  estado: "En progreso" | "Finalizado" ;
  categoria?: string;
  fecha?: string;
  descripcion?: string;
  respuesta?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const estadoColors: Record<string, string> = {
  "En progreso": "text-yellow-500",
  "Finalizado": "text-green-500",
};

const estadoIcons: Record<string, JSX.Element> = {
  "En progreso": <IconClock size={20} className="text-yellow-500" />,
  "Finalizado": <IconCheckCircle size={20} className="text-green-500" />,
};

export default function RequestItem({
  id,
  estado,
  onClick,
  isActive = false,
}: RequestItemProps) {
  return (
    <HistoryItemBase onClick={onClick} isActive={isActive}>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-gray-800">#{id}</p>
        <span className="flex items-center gap-1 text-sm font-medium">
          {estadoIcons[estado]}
          <span className={estadoColors[estado]}>{estado}</span>
        </span>
      </div>
    </HistoryItemBase>
  );
}
