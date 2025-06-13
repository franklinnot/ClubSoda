import type { ISaleDetail } from "../classes/interfaces/isaleDetail";
import type { IDelivery } from "../classes/interfaces/idelivery";
import type { Status } from "../classes/enums/status";


export interface IVenta {
    id: string;
    tipoEntrega: "delivery" | "recojo";
    productos: ISaleDetail[];
    fecha: string;
    metodoPago: string;
    total: number;
    datosEntrega: IDelivery,
    estado: Status, // estado
    stars?: 0 | 1 | 2 | 3 | 4 | 5;
}


export function guardarVenta(
    tipoEntrega: "delivery" | "recojo",
    productos: ISaleDetail[],
    metodoPago: string,
    total: number,
    datosEntrega: IDelivery | { fecha: string },
    estado: Status,
    stars: number,

) {
    const venta = {
        id: Date.now(),
        fecha: new Date().toLocaleString("es-PE", {
            timeZone: "America/Lima",
            hour12: false,
        }),
        tipoEntrega,
        productos,
        metodoPago,
        total,
        datosEntrega,
        estado,
        stars,
    };

    const ventasPrevias = JSON.parse(localStorage.getItem("ventas") || "[]");
    ventasPrevias.push(venta);
    localStorage.setItem("ventas", JSON.stringify(ventasPrevias));
    localStorage.removeItem("carrito");
}

export function obtenerVentas() {
    return JSON.parse(localStorage.getItem("ventas") || "[]");
}