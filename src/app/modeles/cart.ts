import { Product } from "./product";

export class Cart {

  product: Product;
  quantity: number;
  total: string



  constructor(product: Product, quantity: number,total: string) {
    this.product = product;
    this.quantity = quantity;
    this.total = total;

  }

}
