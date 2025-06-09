import { useEffect } from "react";
import type { ILayoutProps } from "../utils/interfaces/ILayout";
import { twMerge } from "tailwind-merge";
import Header from "./partials/header";
import LogoGN from "./partials/logos/logo-gn";
import LogoMoli from "./partials/logos/logo-moli";
import LogoSJ from "./partials/logos/logo-sj";

export default function LayoutAuth({
  children,
  className = "",
  classNameMain = "",
  title,
  user,
  footer = false,
}: ILayoutProps) {
  useEffect(() => {
    document.title = title ? `${title} - San Jorge` : "San Jorge";
  }, [title]);
  return (
    <div
      className={twMerge(
        `flex min-h-dvh flex-col overflow-x-hidden`,
        className
      )}
    >
      <Header title={title} user={user} className="" />
      <main
        className={twMerge(
          `flex flex-col flex-1 justify-center items-center`,
          classNameMain
        )}
      >
        {children}
      </main>
      {footer && (
        <footer className="w-dvw mt-20 bg-[#ee1d23] text-white border-t border-t-white py-16 text-center">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-16">
            {/* Logo San Jorge */}
            <div className="flex flex-col items-center">
              <LogoSJ className="size-24" />
              <span className="font-semibold mt-1">
                Panaderia San Jorge S. A.
              </span>
              <span className="max-w-[200px]">
                ¡Compartiendo más de 75 años contigo!
              </span>
            </div>

            {/* Logo Galletera del Norte */}
            <div className="flex flex-col items-center">
              <LogoGN className="size-16" />
              <span className="font-semibold mt-10">Galletera del Norte</span>
              <span className="max-w-[200px]">
                Tradición norteña para disfrutar
              </span>
            </div>

            {/* Logo Molinera del Centro */}
            <div className="flex flex-col items-center">
              <span className="bg-red-500">
                <LogoMoli className="size-20" />
              </span>
              <span className="font-semibold mt-3">
                Compañía Molinera del Centro S. A.
              </span>
              <span className="max-w-[200px]">
                Siempre lo mejor para los mejores
              </span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
