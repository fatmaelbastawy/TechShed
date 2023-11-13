import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cartservice } from './services/cart.service';
import { CartComponent } from './components/Cart/Cart.component'

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    Cartservice
  ],
  exports: [
    CartComponent,

  ]
})
export class CartModule { }

