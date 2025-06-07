import { Status } from "../enums/status";
import { Payments } from "../enums/payments";
import { Givetypes } from "../enums/givetypes";
import type { ISaleDetail } from "./isaleDetail";
import type { IDelivery } from "./idelivery";

export interface ISale {
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
}
