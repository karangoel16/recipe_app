///<reference path="shopping-list/shopping-list.component.ts"/>
import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeRoutes} from './recipes/recipe-routing.module';

const appRoutes: Routes = [{
  path: '',
  redirectTo: 'recipe',
  pathMatch: 'full'
}, {
  path: 'recipe',
  children: RecipeRoutes
}, {
  path: 'shopping',
  component: ShoppingListComponent
}, {
  path: 'shopping/:id',
  component: ShoppingListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
