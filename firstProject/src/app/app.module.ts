import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './Recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './Recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './Recipes/Recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShopingEditComponent } from './Shopping-list/shoping-edit/shoping-edit.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [

    AppComponent,
    
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShopingEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
