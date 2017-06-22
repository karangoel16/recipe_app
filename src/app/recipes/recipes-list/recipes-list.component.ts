import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipe:Recipe[]=[];
  	constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  	this.recipe=this.recipeService.getrecipe();
  }
}
