import { Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Injectable()
export class ShoppingService {
  ingredients:Ingredient[]=[
  	new Ingredient("apples",5),
  	new Ingredient("tomato",3)];
  constructor() { }
  onAddIngredient(ingredient:Ingredient){
  	this.ingredients.push(ingredient);
  }
}
