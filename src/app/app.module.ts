import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './Products/services/Product.service';
import { ProductsModule } from './Products/Products.module';
import { CartModule } from './Cart/Cart.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
