import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

export const ROUTES: Routes = [
    { path: '', component: AdminComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    declarations: [AdminComponent]
})
export class AdminModule { }