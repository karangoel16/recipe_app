import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html'
})
export class RecipeAddComponent implements OnInit {
  recipe: Recipe;
  ingredients: Ingredient[] = [];
  myForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      imagesrc: new FormControl(null, Validators.required),
      desc: new FormControl(null, [Validators.minLength(100), Validators.required]),
      ingredients: this.formbuilder.array([])
    });
    const arraycontrol = this.myForm.controls['Ingredients'];

  }

  onSubmit() {
    console.log('we are here');
  }

  onAddIngredient() {
    this.ingredients.push(new Ingredient("",0));
  }
}
