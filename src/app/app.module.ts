import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './Products/services/Product.service';
import { ProductsModule } from './Products/Products.module';
import { CartModule } from './Cart/Cart.module';
import { SharedModule } from './Shared/Shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './Cart/components/Checkout/checkout.component';
import { FormsModule } from '@angular/forms';

RouterModule

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule


  ],
  exports:[FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
