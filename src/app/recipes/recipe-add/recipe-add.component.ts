import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html'
})
export class RecipeAddComponent implements OnInit {
  recipe: Recipe;
  ingredients: Ingredient[] = [];
  myForm: FormGroup;
  imagesrc: string;
  recipeIngredient: FormArray;

  constructor(private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeIngredient = new FormArray([]);
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      imagesrc: new FormControl(null, Validators.required),
      desc: new FormControl(null, [Validators.minLength(100), Validators.required]),
      ingredients: this.recipeIngredient
    });

  }

  onDelete(id: number) {
    this.recipeIngredient.removeAt(id);
  }

  onAddIngredient() {
    this.recipeIngredient.push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required)
    }));
  }

  onSubmit() {
    for (let ing of this.recipeIngredient.getRawValue()) {
      console.log(ing);
    }
    this.recipeService.onAddRecipe(new Recipe(this.myForm.value.name, this.myForm.value.desc, this.myForm.value.imagesrc, this.ingredients));
    this.router.navigate(['/recipe']);
  }

  onReset() {
    this.myForm.reset();
  }

  onBack() {
    this.router.navigate(['/recipe']);
  }
}
