import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/Product.service';

import { AllProductComponent } from './components/AllProduct/AllProduct/AllProduct.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    AllProductComponent
  ]
})
export class ProductsModule { }
