export const request = [
  {
    id: "REQ001",
    estado: "Finalizado" as const,
    categoria: "Pago",
    fecha: "2025-05-02",
    descripcion: "Tuve un problema con el pago.",
    respuesta: "Hemos reembolsado el monto a tu cuenta.",
  },
  {
    id: "REQ002",
    estado: "En progreso" as const,
    categoria: "Producto",
    fecha: "2025-06-04",
    descripcion: "¿Cuándo repondrán el producto X?",
    respuesta: "",
  },
  {
    id: "REQ003",
    estado: "En progreso" as const,
    categoria: "Descuento",
    fecha: "2025-06-05",
    descripcion: "¿Permite el ingreso de dos cupones de descuento?",
    respuesta: "",
  },
];
