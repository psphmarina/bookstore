import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './header/app.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthorisationService } from "./authorisation/authorisation.service";
import { TokenInterceptor } from "./token.interceptor";
import { AuthGuard } from './authorisation/authorisation.guard';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'book', canActivate: [AuthGuard], loadChildren: './book/book.module#BookModule' },
  { path: 'admin', canActivate: [AuthGuard],loadChildren: './admin/admin.module#AdminModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' },
{ path: 'authorisation', loadChildren: './authorisation/authorisation.module#AuthorisationModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    AuthorisationService, 
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthGuard
],
})
export class AppRoutingModule { }
