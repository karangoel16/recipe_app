import {Ingredient} from '../shared/ingredient.model';
import {Output,EventEmitter} from '@angular/core';
export class ShoppingService {
  private ingredients:Ingredient[]=[
  	new Ingredient("apples",5),
  	new Ingredient("tomato",3)];
  @Output() ingredientChanged = new EventEmitter<Ingredient[]>();
  constructor() { }
  onAddIngredient(ingredient:Ingredient){
  	this.ingredients.push(ingredient);
  	this.ingredientChanged.emit(this.ingredients.slice());
  }
  onAddIngredients(ingredient:Ingredient[]){
  	this.ingredients.push(...ingredient);
  	this.ingredientChanged.emit(this.ingredients.slice());
  }
  getIngredient(){
  	return this.ingredients.slice();
  }
  onClearIngredient()
  {
  	this.ingredients.length=0;
  }
}
