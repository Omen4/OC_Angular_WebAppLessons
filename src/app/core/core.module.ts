import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/auth-guard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [AuthGuard],
})
export class CoreModule { }
