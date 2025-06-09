import LayoutAuth from "../../layouts/layout-auth";
import Carousel from "./carousel";
import Categories from "./categories/categories";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <LayoutAuth
      title="Dashboard"
      className="animated-gradient-bg"
      classNameMain="justify-start items-center gap-8 md:gap-10"
      footer={true}
    >
      <Carousel />
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900/80">
        Nuestros productos
      </h2>
      <Categories />
      <div
        className="flex flex-col max-w-[700px] mt-5 
                  items-center text-slate-900/80 gap-10"
      >
        <Link to="/">
          <img
            className="size-[160px] hover:scale-[1.2] transition-transform duration-300"
            src="/logo_caballito.svg"
            alt="San Jorge Logo"
          />
        </Link>
        <div className="flex flex-col max-sm:mx-[25px] max-md:mx-[50px] bg-indigo-50 p-8 py-10 rounded-2xl gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Nuestra historia</h2>
          <p className="text-center">
            San Jorge inicia a mediados de 1940, en una pequeña panadería,
            ubicada en el distrito de Chosica, donde rápidamente la calidad de
            nuestros productos junto a la calidez, seriedad y emprendimiento de
            la familia fundadora, lograron que la empresa tenga una gran acogida
            por todos los peruanos.
          </p>
        </div>
      </div>
    </LayoutAuth>
  );
}
