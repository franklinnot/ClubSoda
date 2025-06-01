import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getRoutes from "../../../utils/routes";
import type { IRoute } from "../../../utils/interfaces/IRoute";

export default function NavigationDesktop() {
  const [routes, setRoutes] = useState<IRoute[]>([]);
  useEffect(() => {
    setRoutes(getRoutes() as IRoute[]);
  }, []);
  return (
    <nav className="hidden md:flex flex-row gap-10 mt-[2px]">
      {routes.map((item: IRoute, index: number) => (
        <Link
          key={index}
					to={item.route}
          className="text-gray-700 font-normal text-sm hover:underline hover:underline-offset-1 hover:text-blue-600"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
