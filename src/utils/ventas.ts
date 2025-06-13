import type { ISaleDetail } from "../classes/interfaces/isaleDetail";

import type { IDelivery } from "../classes/interfaces/idelivery";


interface IVenta{
    id: string;
    tipoEntrega: "delivery"|"recojo";
    productos: ISaleDetail[];
    fecha : string;
    metodoPago: string;
    total: number;
    datosEntrega: any,
}


export function guardarVenta(
    tipoEntrega: "delivery" | "recojo",
    productos: ISaleDetail[],
    metodoPago: string,
    total: number,
    datosEntrega: IDelivery| {fecha:string}

){  
    const venta ={
        id: Date.now(),
        fecha: new Date().toISOString(),
        tipoEntrega,
        productos,
        metodoPago,
        total,
        datosEntrega,
    };

    const ventasPrevias = JSON.parse(localStorage.getItem("ventas")||"[]");
    ventasPrevias.push(venta);
    localStorage.setItem("ventas", JSON.stringify(ventasPrevias));
    localStorage.removeItem("carrito");

}