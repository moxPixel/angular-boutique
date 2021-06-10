import { Injectable } from '@angular/core';
import { Cart } from '../modeles/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
add(productAdd:Cart , total:string): void {
 const cart = this.get();
 console.log(cart);
 cart.push(productAdd);
 this.save(cart);this.saveTotal(total);
}


private saveTotal(total: string): void {
  total = (parseFloat(total) + parseFloat(this.getTotal())).toFixed(2);
  localStorage.setItem('cartTotal', total);
}

private save(cart: Cart[]): void {
localStorage.setItem('cart',JSON.stringify(cart));
}

getTotal(): string {
  return (localStorage.getItem('cartTotal') as string) ?? 0;
}
get(): Cart[] {
  return JSON.parse(localStorage.getItem('cart') as string) ?? [];
}


remove(cart: Cart): void {
  localStorage.removeItem('cart');
}
clear(): void {
  localStorage.removeItem('cart');
  localStorage.removeItem('cartTotal');
}

}


