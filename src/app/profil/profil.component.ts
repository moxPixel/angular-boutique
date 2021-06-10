import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/users';
import { Cart } from '../modeles/cart';
import { Product } from '../modeles/product';
import { User } from '../modeles/user';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  use = new User()
  user = USERS;
  cart: Cart[] = [];
  product: Product[] = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }
  /**
   * Suppression d'un produit
   */
   removeProduct(product: Cart): void {
    this.cartService.remove(product);
  }

}
