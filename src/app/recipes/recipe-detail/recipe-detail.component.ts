import { Component, OnInit ,Input} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeItemComponent} from '../recipes-list/recipe-item/recipe-item.component'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()recipe:Recipe;
  constructor() { }
  ngOnInit() {
  }
  
  getval(eventData:Recipe){
  	console.log(eventData);
  }
}
