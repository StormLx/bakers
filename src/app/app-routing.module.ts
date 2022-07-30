import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecettesComponent} from "./bakers/recettes/recettes.component";
import {ShoppingListComponent} from "./bakers/shopping-list/shopping-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'recettes', pathMatch: 'full' },
  { path: 'recettes', component: RecettesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: 'recettes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
