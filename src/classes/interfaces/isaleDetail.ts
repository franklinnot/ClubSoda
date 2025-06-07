import type { IProduct } from "./iproduct";

export interface ISaleDetail {
  product: IProduct;
  quantity: number;
  subtotal: number;
}
