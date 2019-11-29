import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const ROUTES: Routes = [
    { path: '', component: AdminComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES), 
    CommonModule,
    FormsModule],
    declarations: [AdminComponent]
})
export class AdminModule { }