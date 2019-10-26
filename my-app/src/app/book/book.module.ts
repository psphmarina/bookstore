import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';

export const ROUTES: Routes = [
    { path: '', component: BookComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    declarations: [BookComponent]
})
export class BookModule { }