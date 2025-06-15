import type { ReactNode } from "react";

interface HistoryItemBaseProps {
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export default function HistoryItemBase({
  children,
  onClick,
  isActive = false,
}: HistoryItemBaseProps) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-3 cursor-pointer transition border-b
        ${isActive ? "bg-gray-100 border-gray-300" : "hover:bg-gray-50 border-gray-200"}`}
    >
      {children}
    </div>
  );
}