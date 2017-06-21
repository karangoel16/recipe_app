import { Component, OnInit ,Input} from '@angular/core';
import {RecipeService} from '../../recipe.service';
import {Recipe} from '../../recipes.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  sendval(){
    this.recipeService.onSelect(this.recipe);
  	//this.recipeService.itemSelected.emit(this.recipe);
  }
}
