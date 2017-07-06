import {EventEmitter, Output, Injectable, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';
import {Ingredient} from '../shared/ingredient.model'
import {ShoppingService} from '../shopping-list/shopping-service.service';
import {Router} from '@angular/router';

@Injectable()

export class RecipeService implements OnInit {
  private recipe: Recipe[];
  @Output() itemSelected = new EventEmitter<number>();
  @Output() recipeChanged = new EventEmitter<string>();

  constructor(private shoppingService: ShoppingService, private router: Router) {
  }

  ngOnInit() {
  }

  getrecipe() {
    if (this.recipe)
      return this.recipe.slice();
  }

  setrecipe(recipe: Recipe[]) {
    this.recipe = recipe;
    this.recipeChanged.emit('test');
  }

  getrecipeById(id: number) {
    return this.recipe[id];
  }

  onSelect(eventData: number) {
    this.itemSelected.emit(eventData);
  }

  onAddtoCart(eventData: Recipe) {
    this.shoppingService.onAddIngredients(eventData.ingredient);
  }

  onEditRecipe(id: number, recipe: Recipe) {
    this.recipe[id] = recipe;
  }

  onAddRecipe(recipe: Recipe) {
    this.recipe.push(recipe);
    this.recipeChanged.emit('test');
  }

  onDelete(id: number) {
    this.recipe.splice(id, 1);
    this.recipeChanged.emit('test');
  }
}
