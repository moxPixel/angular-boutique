import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { SinleProductComponent } from './sinle-product/sinle-product.component';


const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
{
  path: 'profil',
  component: ProfilComponent
},
{
  path: 'single-product/:id',
  component: SinleProductComponent
},
{
  path: 'cart',
  component: CartComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
