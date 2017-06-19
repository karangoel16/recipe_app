import { Component, OnInit ,Input , EventEmitter , Output} from '@angular/core';
import {Recipe} from '../../recipes.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() itemChecked = new EventEmitter<Recipe>();
  @Input() recipe:Recipe;
  constructor() { }

  ngOnInit() {
  }
  sendval(){
  	this.itemChecked.emit(this.recipe);
  }
}
