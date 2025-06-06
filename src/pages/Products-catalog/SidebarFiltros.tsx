import { useState } from "react";
import Checkbox from "../../components/Checkbox";
import PrimaryButton from "../../components/PrimaryButton";
import {motion} from 'framer-motion'
const categoria =[
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
}:{
    onCategoriaChange: (categorias:string[])=> void;
    onPrecioChange:(min: number, max:number) => void;


}) {
    const [Seleccionadas, setSeleccionadas] = useState<string[]>([]);
    const [minPrecio, setMinPrecio] = useState(30);
    const [maxPrecio, setMaxPrecio] = useState(300);

    const toggleCategoria = (categoria:string)=>{
        let nuevasCategorias =[...Seleccionadas];
        if(nuevasCategorias.includes(categoria)){
            nuevasCategorias = nuevasCategorias.filter((c)=> c !== categoria)

        }else{
            nuevasCategorias.push(categoria);
        }

        setSeleccionadas(nuevasCategorias);
        onCategoriaChange(nuevasCategorias);
    };
    const confirmarPrecio=()=>{
        onPrecioChange(minPrecio, maxPrecio);
    };

return (
      <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className=" rounded-lg flex flex-col items-center w-full sm:max-w-xs justify-between"
    >
        <div className="mt-4 w-full max-w-[240px] max-h-[550px] orverflow-auto border border-gray-300 p-4 rounded-md">
        <h2 className="pl-4 bg-red-500 border-r rounded-md text-lg font-semibold text-white mb-2">
            Categorias
        </h2>
        <div className="space-y-6">
            {categoria.map((cat)=>(
                <label key={cat} className="flex items-center gap-2 text-sm">
                    <Checkbox className="accent-red-500"
                    value={cat} 
                    checked={Seleccionadas.includes(cat)}
                    onChange={()=>toggleCategoria(cat)}
                    />

                    {cat}
                </label>
            ))}
        </div>

        <h2 className="text-lg font-semibold text-red-600 mt-6 mb-2">precio</h2>
        <div className="flex item-center justify-between text-sm">
            <input
                type="number"
                min = {30}
                max={300}
                value={minPrecio}
                onChange={(e)=> setMinPrecio(Number(e.target.value))}
                className="pl-5 w-16 border rounded"
            />
        <span>-</span>

            <input 
                type="number"
                min = {30}
                max={300}
                value={maxPrecio}
                onChange={(e)=> setMaxPrecio(Number(e.target.value))}
                className="pl-5 w-16 border rounded p-1"

            />
        </div>

        <PrimaryButton
        onClick={confirmarPrecio}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium mt-4 py-2 rounded-md"
        >
            Aplicar filtros
        </PrimaryButton>
        
    </div>
    




        
    </motion.div>
    



)
   
};
  


