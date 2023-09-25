import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedComponent } from './Shared.component';
import { AppModule } from '../app.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [HeaderComponent],
   providers: [

  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
