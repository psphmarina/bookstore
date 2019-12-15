import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorisationComponent } from './authorisation.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [
    { path: '', component: AuthorisationComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES), 
    CommonModule,
    FormsModule],
    declarations: [AuthorisationComponent]
})
export class AuthorisationModule { }