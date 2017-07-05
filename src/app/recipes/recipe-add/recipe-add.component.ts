import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {FormGroup, FormControl, Validators} from '@angular/forms';
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

  constructor(private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      imagesrc: new FormControl(null, Validators.required),
      desc: new FormControl(null, [Validators.minLength(100), Validators.required]),
    });

  }

  onSubmit() {
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
