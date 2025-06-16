import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconProfile, ArrowDown } from "../../components/Icons";
import type { IUser } from "../../classes/interfaces/iuser";
import Auth from "../../pages/auth/auth";

export default function ProfileMenu({ user }: { user: IUser }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [showModal, setModal] = useState(false); // estado de visibilidad del modal

  const loginComponent = () => {
    setModal(true);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuProfile = document.getElementById("menu-profile");
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement)?.contains(event.target as Node) &&
        menuProfile &&
        !menuProfile.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {showModal  && (
        <Auth
          onClose={() => {
            setModal(false);
          }}
        />
      )}

      <div
        className="relative grid grid-flow-col place-items-center justify-self-end gap-2"
        ref={menuRef}
      >
        {/* Nombre del usuario */}
        <div className="hidden lg:block text-gray-600 text-sm">
          {user ? (
            <span>{user.name}</span>
          ) : (
            <button
              onClick={loginComponent}
              className="cursor-pointer hover:text-blue-600"
            >
              Iniciar sesión
            </button>
          )}
        </div>

        {/* Contenedor del ícono de perfil y la flechita */}
        {user ? (
          <div
            id="menu-profile"
            className="relative cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <IconProfile size={34} className="text-gray-700" />
            <ArrowDown
              className={`absolute text-white bottom-[7px] right-[2.5px] transform translate-y-1/2 transition duration-200 bg-gray-700 border border-gray-600 rounded-full ${
                menuOpen ? "rotate-180" : ""
              }`}
              size={14}
            />
          </div>
        ) : (
          <div id="menu-profile" className="relative">
            <IconProfile size={34} className="text-gray-700" />
          </div>
        )}

        {/* Menú desplegable */}
        <div
          className={`absolute top-[3.4rem] right-[-8px] w-[8rem] bg-indigo-50
                    transition-all duration-150 z-50 shadow-md rounded-lg transform ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
          style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        >
          <ul>
            <li className="px-4 py-2 hover:bg-indigo-100 border-b border-gray-300 text-gray-700 text-sm font-normal text-left rounded-t-lg">
              <Link to="/profile">Perfil</Link>
            </li>
            <li className="px-4 py-2 hover:bg-indigo-100 text-sm font-normal text-left text-red-500 rounded-b-lg">
              <Link to="/logout">Cerrar sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
