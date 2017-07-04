import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.recipe = this.recipeService.getrecipeById(this.id);
  }
}
