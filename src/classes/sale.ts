import { Status } from "./enums/status";
import { Payments } from "./enums/payments";
import { Givetypes } from "./enums/givetypes";
import { SaleDetail } from "./saleDetail";
import type { IDelivery } from "./interfaces/idelivery";

export class Sale {
  private _code: string; // codigo
  private _date: Date; // fecha
  private _payment: Payments; // metodo de pago
  private _giveType: Givetypes; // tipo de entrega
  private _delivery?: IDelivery; // datos para el delivery
  private _schedule?: Date; // horario de recojo
  private _stars: 0 | 1 | 2 | 3 | 4 | 5; // calificacion (estrellitas)
  private _details: SaleDetail[]; // detalle de laventa
  private _status: Status; // estado

  constructor() {
    this._code = "#" + Math.floor(100000 + Math.random() * 900000).toString();
    this._date = new Date();
    this._payment = Payments.OTRO; // por defecto
    this._giveType = Givetypes.RECOJO; // por defecto
    this._stars = 0;
    this._details = [];
    this._status = Status.PROGRESO;
  }

  get code(): string {
    return this._code;
  }

  get date(): Date {
    return this._date;
  }

  get payment(): Payments {
    return this._payment;
  }

  set payment(value: Payments) {
    this._payment = value;
  }

  get giveType(): Givetypes | undefined {
    return this._giveType;
  }

  set giveType(value: Givetypes) {
    this._giveType = value;
  }

  get delivery(): IDelivery | undefined {
    return this._delivery;
  }

  set delivery(value: IDelivery | undefined) {
    this._delivery = value;
  }

  get schedule(): Date | undefined {
    return this._schedule;
  }

  set schedule(value: Date | undefined) {
    this._schedule = value;
  }

  get stars(): 0 | 1 | 2 | 3 | 4 | 5 {
    return this._stars;
  }

  set stars(value: 0 | 1 | 2 | 3 | 4 | 5) {
    this._stars = value;
  }

  get details(): SaleDetail[] {
    return this._details;
  }

  set details(value: SaleDetail[]) {
    this._details = value;
  }

  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    this._status = value;
  }

  get total(): number {
    return this._details.reduce((sum, d) => sum + d.subtotal, 0);
  }

  addDetail(detail: SaleDetail): void {
    this._details.push(detail);
  }
}
