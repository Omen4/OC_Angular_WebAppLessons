import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppareilViewComponent } from './appareil-view.component';
import { AppareilComponent } from './appareil/appareil.component';



@NgModule({
  declarations: [AppareilViewComponent, AppareilComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AppareilViewModule { }
