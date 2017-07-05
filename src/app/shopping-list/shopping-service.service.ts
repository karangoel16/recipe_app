import {Ingredient} from '../shared/ingredient.model';
import {Output, EventEmitter} from '@angular/core';
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomato', 3)];
  @Output() ingredientChanged = new EventEmitter<Ingredient[]>();
  @Output() editIngredient = new EventEmitter<number>();

  constructor() {
  }

  onEditIngredient(id: number, ingredient: Ingredient) {
    if (id >= 0 && id < this.ingredients.length) {
      this.ingredients[id] = ingredient;
      this.ingredientChanged.emit(this.ingredients.slice());
    }
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  onAddIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  getIngredient() {
    return this.ingredients.slice();
  }

  onClearIngredient() {
    this.ingredients.length = 0;
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  onGetid(ingredient: Ingredient) {
    return this.ingredients.indexOf(ingredient);
  }

  onGetIngredientById(id: number) {
    if (id < 0 || id >= this.ingredients.length) {
      return null;
    } else {
      return this.ingredients[id];
    }
  }
}
