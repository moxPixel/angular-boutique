import { Component, OnInit } from '@angular/core';
import { Cart } from '../modeles/cart';
import { Product } from '../modeles/product';
import { PRODUCTS } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
product = new Product()
statusClass = 'not-active';
products = PRODUCTS;
nbr = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  goToCart(product: Product): void {
    const productModel = new Product(
      product.id,
      product.price,
      product.name,
      product.picture,
      product.categories,
      product.created);



    const CARTMODEL = new Cart(productModel,1,this.cartService.getTotal());
      console.log(CARTMODEL);

    this.cartService.add(CARTMODEL, JSON.stringify(1));
    // this.router.navigateByUrl('mon-panier.html');

  }

  clear(): void {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTotal');
  }


  setActiveClass(): void {
    this.statusClass = 'active';
  }
  
}
