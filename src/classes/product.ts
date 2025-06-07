import type { IProduct } from "./interfaces/iproduct";

export class Product {
  name: string;
  price: number;
  url: string; // url de la imagen

  constructor({ name, price, url }: IProduct) {
    this.name = name;
    this.price = price;
    this.url = url;
  }
}
