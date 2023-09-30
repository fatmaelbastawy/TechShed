import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedComponent } from './Shared.component';
import { AppModule } from '../app.module';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,


  ],
  declarations: [HeaderComponent, SpinnerComponent, ModalComponent],
   providers: [

  ],
  exports: [
    HeaderComponent,
    SpinnerComponent

  ]
})
export class SharedModule { }
