import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { RecettesComponent } from './bakers/recettes/recettes.component';
import { RecetteComponent } from './bakers/recettes/recette/recette.component';
import { RecetteDetailComponent } from './bakers/recettes/recette-detail/recette-detail.component';
import { ShoppingListComponent } from './bakers/shopping-list/shopping-list.component';
import {FormsModule} from "@angular/forms";
import {CartTotalComponent} from "./bakers/shopping-list/cart-total/cart-total.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RecettesComponent,
    RecetteComponent,
    RecetteDetailComponent,
    ShoppingListComponent,
    CartTotalComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
