import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  constructor() { 
  	this.recipe=new Recipe(
  		"hell1o",
  		"karan",
  		"jswi"
  	);}
  ngOnInit() {
  }
  
  getval(eventData:Recipe){
  	console.log(eventData);
  }
}
