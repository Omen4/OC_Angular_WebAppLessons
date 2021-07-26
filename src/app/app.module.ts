import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { AppareilService } from './shared/repositories/appareil.service';
import { AuthComponent } from './features/auth/auth.component';
import { AppareilViewComponent } from './features/appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './features/single-appareil/single-appareil.component';
import { QuatreSansQuatreComponent } from './features/quatre-sans-quatre/quatre-sans-quatre.component';
import { AuthGuard } from './core/services/auth-guard.service';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes =[
  {path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent},
  {path: 'authentification', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: QuatreSansQuatreComponent},
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
  ],
  providers: [AppareilService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
