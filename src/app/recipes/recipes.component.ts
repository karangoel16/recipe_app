import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  id: number;

  constructor() {
  }

  ngOnInit() {

  }
}
