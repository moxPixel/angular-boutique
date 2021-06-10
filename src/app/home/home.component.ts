import { Component, OnInit } from '@angular/core';
import { Product } from '../modeles/product';
import { PRODUCTS } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
product = new Product()

  products = PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
