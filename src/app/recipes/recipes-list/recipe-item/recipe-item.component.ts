import {Component, OnInit, Input} from '@angular/core';
import {RecipeService} from '../../recipe.service';
import {Recipe} from '../../recipes.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipe = this.recipeService.getrecipeById(this.id);
  }

  sendval() {
    this.recipeService.onSelect(this.id);
  }
}
