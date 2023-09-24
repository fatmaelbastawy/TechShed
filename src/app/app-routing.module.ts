import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './Products/components/AllProduct/AllProduct/AllProduct.component';
import { ProductDetailsComponent } from './Products/components/Product-details/Product-details/Product-details.component';
import { CartComponent } from './Cart/components/Cart.component';
import { NotfoundComponent } from './Shared/components/Notfound/Notfound.component';

const routes: Routes = [
  {path:"AllProducts",component:AllProductComponent},
  {path:"Details",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"",redirectTo:"AllProducts",pathMatch:'full'},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
