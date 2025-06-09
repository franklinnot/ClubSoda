import { Status } from "./enums/status";
import { Payments } from "./enums/payments";
import { Givetypes } from "./enums/givetypes";
import type { ISaleDetail } from "./interfaces/isaleDetail";
import { SaleDetail } from "./saleDetail";
import type { IDelivery } from "./interfaces/idelivery";
import type { ISale } from "./interfaces/isale";

export class Sale implements ISale {
  code: string; // codigo
  date: Date; // fecha de registro
  total: number; // monto total
  payment: Payments; // metodo de pago
  giveType: Givetypes; // tipo de entrega
  delivery?: IDelivery; // datos de entrega en caso de delivery
  schedule?: Date; // horario de recojo
  stars: 0 | 1 | 2 | 3 | 4 | 5; // calificacion (estrellitas)
  details: ISaleDetail[]; // detalle
  status: Status; // estado

  constructor({
    code,
    date,
    // total,
    payment,
    giveType,
    delivery,
    schedule,
    stars,
    details,
    status,
  }: Omit<ISale, "total">) {
    this.code = code;
    this.date = date;
    // this.total = total;
    this.payment = payment;
    this.giveType = giveType;
    this.delivery = delivery;
    this.schedule = schedule;
    this.stars = stars;
    this.details = details;
    this.status = status;

    // Cada detalle sera una instancia de SaleDetail
    this.details = details.map((d) => new SaleDetail(d));

    // Calculamos el total
    this.total = this.details.reduce((sum, d) => sum + d.subtotal, 0);
  }

  guardar(){
    const ventas = JSON.parse(localStorage.getItem("ventas")|| "[]");
    ventas.push(this);
    localStorage.setItem("ventas", JSON.stringify(ventas))
  }
}
