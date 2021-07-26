import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuatreSansQuatreComponent } from './quatre-sans-quatre.component';



@NgModule({
  declarations: [QuatreSansQuatreComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class QuatreSansQuatreModule { }
