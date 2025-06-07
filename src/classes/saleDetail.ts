import { Product } from "./product";

export class SaleDetail {
  private _product: Product;
  private _quantity: number;

  constructor(product = new Product(), quantity = 0) {
    this._product = product;
    this._quantity = quantity;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get subtotal(): number {
    return this._product.price * this._quantity;
  }
}

const product = new Product();
product.name = "papitas";
product.price = 12;
product.url = "https://soy-la-imagen.jpg";

const detail = new SaleDetail();
detail.product = product;
detail.quantity = 2;
