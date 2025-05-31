import type { ILayoutProps } from "./ILayout";
import { useEffect } from "react";

export default function LayoutGuest({
  children,
  className = "",
  title,
}: ILayoutProps) {
  useEffect(() => {
    document.title = title ? `${title} - San Jorge` : "San Jorge";
  }, [title]);

  return (
    <div
      className={`flex min-h-dvh flex-col justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}
