import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../modeles/product';
import { PRODUCTS } from '../products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-sinle-product',
  templateUrl: './sinle-product.component.html',
  styleUrls: ['./sinle-product.component.scss']
})
export class SinleProductComponent implements OnInit {
  product: Product = new Product();
  products = PRODUCTS;
  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.products = PRODUCTS;

    let id = +this.route.snapshot.paramMap.getAll('id');
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            this.product = this.products[i];
        }
    }
}
goBack(): void {
  this.router.navigate(['']);
}
  }



