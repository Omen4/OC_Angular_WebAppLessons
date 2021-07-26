import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleAppareilComponent } from './single-appareil.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [SingleAppareilComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SingleAppareilModule { }
