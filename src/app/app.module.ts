import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipes-list/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import {ManageDropdownDirective} from './manage-dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {RecipeAddComponent} from './recipes/recipe-add/recipe-add.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {SignUpComponent} from './user/signup/signup.component';
import {ShoppingService} from './shopping-list/shopping-service.service';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './data-storage.service';
import {UserService} from './user/user.service';
import {UserGuardService} from './user/user-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeAddComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    SignInComponent,
    SignUpComponent,
    ManageDropdownDirective
  ],
  providers: [ShoppingService, RecipeService, DataStorageService, UserService, UserGuardService],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
