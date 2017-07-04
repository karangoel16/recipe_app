import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.itemSelected.subscribe((eventData: number) => {
      this.recipe = this.recipeService.getrecipeById(eventData);
      this.id = eventData;
    });
  }

  AddtoCart() {
    this.recipeService.onAddtoCart(this.recipe);
  }
}
