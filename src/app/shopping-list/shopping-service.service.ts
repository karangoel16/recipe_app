import {Ingredient} from '../shared/ingredient.model';
export class ShoppingService {
  ingredients:Ingredient[]=[
  	new Ingredient("apples",5),
  	new Ingredient("tomato",3)];
  constructor() { }
  onAddIngredient(ingredient:Ingredient){
  	this.ingredients.push(ingredient);
  }
  onAddIngredients(ingredient:Ingredient[]){
  	this.ingredients.push(...ingredient);
  }
  onClearIngredient()
  {
  	this.ingredients.length=0;
  }
}
