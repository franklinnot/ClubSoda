export class Product {
  name: string;
  price: number;
  url: string;

  constructor(name = "", price = 0, url = "") {
    this.name = name;
    this.price = price;
    this.url = url;
  }
}

const product = new Product();
product.name = "papitas";
product.price = 12;
product.url = "https://soy-la-imagen.jpg";
