import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/dashboard/1.png";
import img2 from "../../assets/dashboard/2.png";
import img3 from "../../assets/dashboard/3.png";
import img4 from "../../assets/dashboard/4.png";
import img5 from "../../assets/dashboard/5.png";

type CarouselItem = {
  image: string;
  title: string;
  description: string;
};

const carouselItems: CarouselItem[] = [
  {
    image: img1,
    title: "Bienvenido a San Jorge",
    description:
      "Descubre la mejor selección de productos de panadería artesanal.",
  },
  {
    image: img2,
    title: "Controla tus compras",
    description: "Visualiza tus pedidos.",
  },
  {
    image: img3,
    title: "Personaliza tu catálogo",
    description: "Agrega, edita y destaca tus productos favoritos fácilmente.",
  },
  {
    image: img4,
    title: "Atención y Soporte",
    description: "Recibe ayuda rápida por agentes especializados.",
  },
  {
    image: img5,
    title: "Novedades y Promociones",
    description:
      "Mantente informado sobre nuevas recetas y ofertas especiales.",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(nextSlide, AUTO_PLAY_INTERVAL);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div
      className="relative min-w-dvw  
                overflow-hidden bg-white 
                shadow-lg"
    >
      {carouselItems.map((item, idx) => (
        <div
          key={idx}
          className="flex items-end w-full h-[400px] 
                    sm:h-[425px] md:h-[450px] lg:md:h-[500px]"
          style={{
            opacity: idx === current ? 1 : 0,
            pointerEvents: idx === current ? "auto" : "none",
            transition: "opacity 1.4s",
            position: idx === current ? "relative" : "absolute",
          }}
        >
          {/* imagen */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full min-h-full object-cover absolute inset-0 
                      z-auto"
          />

          {/* texto */}
          <div
            className="relative z-10 min-h-[110px] text-white w-full px-8 pb-14 pt-8"
            style={{
              background: "rgba(0,0,0,0.35)",
            }}
          >
            {/* titulo */}
            <h2 className="font-bold text-3xl">{item.title}</h2>

            {/* descripcion */}
            <p className="text-base text-white opacity-90 mt-0.5">
              {item.description}
            </p>
          </div>
        </div>
      ))}

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className="flex justify-center items-center pr-1 pb-1 absolute 
                  left-3 sm:left-4 md:left-6 top-1/2 transform
                  -translate-y-1/2 border-none text-white text-3xl 
                  rounded-full size-11 z-10 cursor-pointer"
        style={{
          background: "rgba(0,0,0,0.3)",
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className="flex justify-center items-center pl-1 pb-1 absolute 
                  right-3 sm:right-4 md:right-6 top-1/2 transform 
                  -translate-y-1/2 border-none 
                text-white text-3xl rounded-full size-11 z-10 
                  cursor-pointer"
        style={{
          background: "rgba(0,0,0,0.3)",
        }}
      >
        ›
      </button>

      {/* Indicadores de página */}
      <div
        className="flex absolute gap-2 bottom-5 left-1/2 transform 
                  -translate-x-1/2 z-20"
      >
        {carouselItems.map((_, idx) => (
          <span
            key={idx}
            className="inline-block h-2.5 rounded-2xl cursor-pointer"
            style={{
              width: idx === current ? 26 : 10,
              background: idx === current ? "#fff" : "#fff9",
              opacity: idx === current ? 1 : 0.6,
              transition: "all 1.4s",
              border: "1px solid #fff7",
            }}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
