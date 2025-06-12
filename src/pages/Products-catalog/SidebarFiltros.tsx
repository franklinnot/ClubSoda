import { useState, useEffect } from "react";
import Checkbox from "../../components/Checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { categoria } from "./data/categorias";
import { IconFunnel } from "../../components/Icons";
import { rangosPrecios } from "./data/precio";

export default function SidebarFiltros({
  onCategoriaChange,
  onPrecioChange,
}: {
  onCategoriaChange: (categorias: string[]) => void;
  onPrecioChange: (min: number, max: number) => void;
}) {
  const [Seleccionadas, setSeleccionadas] = useState<string[]>([]);
  const [rangoSeleccionado, setRangoSeleccionado] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsOpen(window.innerWidth >= 800);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCategoria = (cat: string) => {
    const nuevas = Seleccionadas.includes(cat)
      ? Seleccionadas.filter((c) => c !== cat)
      : [...Seleccionadas, cat];
    setSeleccionadas(nuevas);
    onCategoriaChange(nuevas);
  };

  const seleccionarRango = (i: number) => {
    setRangoSeleccionado(i);
    const { min, max } = rangosPrecios[i];
    onPrecioChange(min, max);
  };

  return (
    <aside className="w-full md:w-[280px] md:h-full md:border-r border-gray-300 px-4 py-2 bg-white rounded-none z-50">
      {/* Botón siempre visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 bg-red-500 text-white font-semibold px-4 py-2 rounded mb-4 w-full transition hover:bg-red-600"
      >
        <IconFunnel className="w-5 h-5 text-white" />
        {isOpen ? "Ocultar filtros" : "Mostrar filtros"}
      </button>

      {/* Contenedor del filtro animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="w-full pr-4 bg-white"
          >
            {/* Categorías */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2 pb-1 border-b border-gray-300">
                Categorías
              </h3>
              <div className="space-y-3 mt-3">
                {categoria.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <Checkbox
                      className="accent-red-500"
                      value={cat}
                      checked={Seleccionadas.includes(cat)}
                      onChange={() => toggleCategoria(cat)}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Rangos de precios */}
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2 pb-1 border-b border-gray-300">
                Precio
              </h3>
              <div className="space-y-3 mt-3">
                {rangosPrecios.map((rango, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <Checkbox
                      className="accent-red-500"
                      checked={rangoSeleccionado === i}
                      onChange={() => seleccionarRango(i)}
                    />
                    {rango.label}
                  </label>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
