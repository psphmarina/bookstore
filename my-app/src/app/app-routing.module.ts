import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './header/app.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'book', loadChildren: './book/book.module#BookModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
