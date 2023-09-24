import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/Product.service';

import { AllProductComponent } from './components/AllProduct/AllProduct/AllProduct.component';

@NgModule({
  declarations: [
    AllProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    AllProductComponent
  ]
})
export class ProductsModule { }
