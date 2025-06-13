export const sedes = [
    { id: "lima", name: "Sedes en Lima" },
    { id: "trujillo", name: "Sedes en Trujillo" },
];

export const tiendasPorSede: Record<string, { id: string; name: string }[]> = {
    lima: [
        { id: "la-victoria", name: "Tienda La Victoria - Av. Carlos Villarán 1050, La Victoria" },
        { id: "planta-lima", name: "Planta Lima - Av. Nicolas de Piérola 407, Ate" },
    ],
    trujillo: [
        { id: "planta-trujillo", name: "Planta Trujillo - Av. Teodoro Valcárcel 950, Trujillo, La Libertad" },
    ],
};
