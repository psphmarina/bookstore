import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [
    { path: '', component: RegistrationComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES), 
    CommonModule,
    FormsModule],
    declarations: [RegistrationComponent]
})
export class RegistrationModule { }