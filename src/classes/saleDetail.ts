import type { ISaleDetail } from "./interfaces/isaleDetail";
import type { IProduct } from "./interfaces/iproduct";

export class SaleDetail {
  product: IProduct;
  quantity: number;
  subtotal: number;

  constructor({ product, quantity }: ISaleDetail) {
    this.product = product;
    this.quantity = quantity;
    this.subtotal = product.price * quantity;
  }
}
