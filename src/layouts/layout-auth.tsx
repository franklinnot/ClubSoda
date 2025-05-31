import { useEffect } from "react";
import type { ILayoutProps } from "./ILayout";

export default function LayoutAuth({
  children,
  className = "",
  title,
}: ILayoutProps) {
  // Actualizar el título de la pagina
  useEffect(() => {
    document.title = title ? `${title} - San Jorge` : "San Jorge";
  }, [title]);

  // Cuerpo de la pagina
  return (
    <div className={`flex min-h-dvh flex-col ${className}`}>
      <header className="shrink-0">Soy el header</header>
      <main className="flex flex-col flex-1 justify-center items-center">{children}</main>
    </div>
  );
}
