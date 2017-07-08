///<reference path="recipe-add/recipe-add.component.ts"/>
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RecipeAddComponent} from './recipe-add/recipe-add.component';
import {RecipesComponent} from './recipes.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {UserGuardService} from '../user/user-guard.service';
export const RecipeRoutes = [{
  path: '',
  redirectTo: 'index', pathMatch: 'full'
},
  {
    path: 'index',
    component: RecipesComponent
  },
  {
    path: 'newRecipe',
    component: RecipeAddComponent,
    canActivate: [UserGuardService]
  },
  {
    path: 'edit',
    redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: RecipeEditComponent,
    canActivate: [UserGuardService]
  }
];
