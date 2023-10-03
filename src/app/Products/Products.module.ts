import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/Product.service';
import { RouterModule } from '@angular/router';
import { AllProductComponent } from './components/AllProduct/AllProduct/AllProduct.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../Shared/components/spinner/spinner.component';
import { SharedModule } from '../Shared/Shared.module';
import { ProductComponent } from './components/product/product.component';
import { CartModule } from '../Cart/Cart.module';
@NgModule({
  schemas: [NO_ERRORS_SCHEMA]
,
  declarations: [
    AllProductComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule,
    CartModule


  ],
  providers: [
    ProductService
  ],
  exports: [
    AllProductComponent
  ]
})
export class ProductsModule { }
