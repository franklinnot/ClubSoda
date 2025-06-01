import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IconClose, MenuBurger } from "../../../components/Icons";
import getRoutes from "../../../utils/routes";
import type { IRoute } from "../../../utils/interfaces/IRoute";

interface IProps {
  className?: string;
}

export default function NavigationMobile({ className = "" }: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [routes, setRoutes] = useState<IRoute[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    setRoutes(getRoutes() as IRoute[]);
    const handleClickOutside = (event: MouseEvent) => {
      const openMenuButton = document.getElementById("open_menu");

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        openMenuButton !== event.target // Ignora el botón de abrir menú
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={className}>
      {/* Boton de menu de hamburguesa o de cerrar */}
      <button
        id="open_menu"
        type="button"
        onClick={toggleMenu}
        className="m-0 mt-1 py-1 px-2 bg-gray-50 hover:bg-gray-100 rounded-md border border-gray-200"
        title="Perfil"
      >
        {menuOpen ? (
          <IconClose strokeWidth={1.5} size={20} className="text-gray-600" />
        ) : (
          <MenuBurger strokeWidth={1.5} size={20} className="text-gray-600" />
        )}
      </button>

      {/* Logica y diseño de las rutas de navegacion */}
      <div
        ref={menuRef}
        className={`absolute top-[4rem] left-0 w-min bg-indigo-50 
                    transition-transform duration-150 z-50 shadow-md rounded-xl 
                    ${menuOpen ? "translate-x-[0.8rem]" : "-translate-x-full"}`}
      >
        <nav className="flex flex-col rounded-lg overflow-hidden">
          {routes.map((item: IRoute, index: number) => (
            <div
              key={index}
              className="border-b last:border-b-0 border-gray-300 pr-6 hover:bg-indigo-100"
            >
              <div className="flex items-center justify-between focus:bg-gray-50 cursor-pointer">
                <Link
                  to={item.route!}
                  className="px-4 py-2 flex-1 text-gray-700 text-sm font-normal w-max"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
