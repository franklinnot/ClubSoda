import { useState, useEffect } from "react";
import Checkbox from "../../components/Checkbox";
import PrimaryButton from "../../components/PrimaryButton";
import { motion, AnimatePresence } from "framer-motion";

const categoria = [
  "Galletas Dulces",
  "Galletas Saladas",
  "Panetones",
  "Wafers",
  "Pastas",
  "Harinas",
  "Mermeladas",
  "Aguas",
];

export default function SidebarFiltros({
  onCategoriaChange,
  onPrecioChange,
}: {
  onCategoriaChange: (categorias: string[]) => void;
  onPrecioChange: (min: number, max: number) => void;
}) {
  const [Seleccionadas, setSeleccionadas] = useState<string[]>([]);
  const [minPrecio, setMinPrecio] = useState(30);
  const [maxPrecio, setMaxPrecio] = useState(300);
  const [isOpen, setIsOpen] = useState(true);

  // Opcional: detectar tamaño y cerrar menú automáticamente si la pantalla es pequeña (puedes ajustar el valor)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutar al montar

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCategoria = (categoria: string) => {
    let nuevasCategorias = [...Seleccionadas];
    if (nuevasCategorias.includes(categoria)) {
      nuevasCategorias = nuevasCategorias.filter((c) => c !== categoria);
    } else {
      nuevasCategorias.push(categoria);
    }
    setSeleccionadas(nuevasCategorias);
    onCategoriaChange(nuevasCategorias);
  };

  const confirmarPrecio = () => {
    onPrecioChange(minPrecio, maxPrecio);
  };

  return (
    <div className="w-full sm:max-w-md lg:max-w-xs xl:max-w-sm mx-auto lg:mx-0 p-4">
      {/* Botón para mostrar/ocultar menú en pantalla pequeña o zoom */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500 text-white font-semibold px-4 py-2 rounded mb-2 lg:hidden w-full"
      >
        {isOpen ? "Ocultar filtros" : "Mostrar filtros"}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="w-full max-h-[550px] overflow-auto border border-gray-300 p-4 rounded-lg bg-white shadow-sm"
          >
            <h2 className="text-lg font-semibold text-white bg-red-500 rounded px-2 py-1 mb-4">
              Categorías
            </h2>
            <div className="space-y-4">
              {categoria.map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm">
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

            <h2 className="text-lg font-semibold text-red-600 mt-6 mb-2">
              Precio
            </h2>
            <div className="flex items-center justify-between text-sm gap-2">
              <input
                type="number"
                min={30}
                max={300}
                value={minPrecio}
                onChange={(e) => setMinPrecio(Number(e.target.value))}
                className="w-20 border rounded p-1 text-center"
              />
              <span className="text-gray-600">-</span>
              <input
                type="number"
                min={30}
                max={300}
                value={maxPrecio}
                onChange={(e) => setMaxPrecio(Number(e.target.value))}
                className="w-20 border rounded p-1 text-center"
              />
            </div>

            <PrimaryButton
              onClick={confirmarPrecio}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium mt-4 py-2 rounded-md"
            >
              Aplicar filtros
            </PrimaryButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
