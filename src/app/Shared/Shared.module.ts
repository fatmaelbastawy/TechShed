import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedComponent } from './Shared.component';
import { AppModule } from '../app.module';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Cartservice } from '../Cart/services/cart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  declarations: [HeaderComponent, SpinnerComponent, ModalComponent],
   providers: [Cartservice

  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    FormsModule

  ]
})
export class SharedModule { }
