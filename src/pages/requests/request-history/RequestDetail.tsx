import InputField from "../../../components/InputField";
import { IconCheckCircle, IconClock, IconCloseCircle, IconInformation, IconPlus } from "../../../components/Icons";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

interface RequestDetailProps {
    id: string;
    estado: "En progreso" | "Finalizado";
    categoria?: string;
    fecha?: string;
    descripcion?: string;
    respuesta?: string;
    onClose?: () => void;
}

const estadoColors: Record<string, string> = {
    "En progreso": "text-yellow-500",
    "Finalizado": "text-green-500",
};

const estadoIcons: Record<string, JSX.Element> = {
    "En progreso": <IconClock size={20} className="text-yellow-500 w-4 h-4" />,
    "Finalizado": <IconCheckCircle size={20} className="text-green-500 w-4 h-4" />,
};

export default function RequestDetail({
    id,
    estado,
    categoria = "",
    fecha = "",
    descripcion = "",
    respuesta = "",
    onClose,
}: RequestDetailProps): JSX.Element {
    const navigate = useNavigate();

    return (
        <section
            className={`
                flex-1 h-full flex flex-col text-[#4a4848] overflow-y-auto
                fixed inset-0 bg-white z-50 md:z-10 p-4 shadow-xl
                md:static md:p-0 md:shadow-none md:px-2
            `}
        >
            {/* Encabezado */}
            <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-md font-semibold flex items-center gap-2 flex-1 min-w-0">
                    <span className="truncate">#{id}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium flex-shrink-0">
                        {estadoIcons[estado]}
                        <span className={estadoColors[estado]}>{estado}</span>
                    </span>
                </h3>

                <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                        onClick={() => navigate('/request/new')}
                        className="flex items-center gap-1 border border-red-500 text-red-500 
                        rounded px-2.5 py-1.5 hover:bg-red-500 hover:text-white 
                        transition-colors font-semibold text-sm"
                    >
                        <IconPlus className="w-4 h-4" />
                        <span className="whitespace-nowrap">Nueva Consulta</span>
                    </button>

                    {onClose && (
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-black text-xl block md:hidden"
                        >
                            <IconCloseCircle />
                        </button>
                    )}
                </div>
            </div>

            {/* Categoría y Fecha */}
            <div className="flex flex-wrap gap-2 mb-4">
                <div className="w-full md:max-w-xs">
                    <InputField
                        id="categoria"
                        label="Categoría"
                        value={categoria}
                        onChange={() => { }}
                        disabled
                    />
                </div>
                <div className="w-full md:max-w-xs">
                    <InputField
                        id="fecha"
                        label="Fecha"
                        value={fecha}
                        onChange={() => { }}
                        disabled
                        placeholder="Fecha"
                    />
                </div>
            </div>

            {/* Descripción */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <textarea
                    value={descripcion}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm text-gray-700 resize-none"
                    rows={5}
                />
            </div>

            {/* Respuesta */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Respuesta</label>

                {estado === "En progreso" && !respuesta?.trim() ? (
                    <div className="w-full flex items-center justify-between gap-2 p-3 border border-blue-300 bg-blue-50 rounded-md text-sm text-blue-700">
                        <p className="leading-snug">
                            Tu consulta está siendo revisada. Recibirás una respuesta pronto.
                        </p>
                        <IconInformation className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    </div>
                ) : (
                    <textarea
                        value={respuesta}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm text-gray-700 resize-none"
                        rows={6}
                    />
                )}
            </div>
        </section>
    );
}
