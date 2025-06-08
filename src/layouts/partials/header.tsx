import { Link } from "react-router-dom";
import ProfileMenu from "./profile-menu";
import NavigationMobile from "./navigation/navigation-mobile";
import NavigationDesktop from "./navigation/navigation-desktop";
import ApplicationLogo from "../../components/ApplicationLogo";
import InputSearch from "../../components/input-search";
import { IconShoppingBag } from "../../components/Icons";
import Button from "../../components/button";
import type { IUser } from "../../utils/interfaces/IUser";

interface IHeaderProps {
  user?: IUser;
  title: string;
  className?: string;
}

export default function Header({ user, title, className = "" }: IHeaderProps) {
  return (
    <header
      className={`bg-white sticky shrink-0 top-0 z-50 grid grid-flow-col place-items-center px-5 lg:px-6 h-14 sm:max-h-16 border-b border-gray-300 ${className}`}
    >
      <div className="grid grid-flow-col place-items-center justify-self-start gap-3">
        {/* Navegacion -- celulares */}
        <NavigationMobile className="inline-flex lg:hidden" />

        {/* Application logo */}
        <Link className="hidden sm:inline-flex ml-1 mt-0.5" to="dashboard">
          <ApplicationLogo className="w-[96px]" />
        </Link>
      </div>

      {/* Page title */}
      {title && (
        <h1 className="inline-flex absolute lg:hidden text-base font-medium text-gray-700 mt-1">
          <span className="text-nowrap">{title}</span>
        </h1>
      )}

      {/* Navegacion -- desktop */}
      <NavigationDesktop />
      <InputSearch
        id="search"
        placeholder="Buscar productos..."
        className="hidden xl:inline-flex"
      />

      {/* profile button */}
      <div className="flex flex-row justify-self-end items-center gap-4 mt-1">
        <Button className="p-1.5 rounded-full bg-transparent hover:bg-indigo-50 focus:bg-indigo-50">
          <IconShoppingBag size={24} className="hidden sm:inline-flex text-slate-700" />
        </Button>
        <ProfileMenu user={user} />
      </div>
    </header>
  );
}
