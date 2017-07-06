import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  myForm: FormGroup;
  imagepath: string;
  recipeIngredients: FormArray;

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService, private route: Router) {
  }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((params: Params) => {
        this.id = params.id;
        this.recipe = this.recipeService.getrecipeById(this.id);
        this.imagepath = this.recipe.imagePath;
        this.recipeIngredients = new FormArray([]);
        if (this.recipe.ingredient.length) {
          for (let ingredient of this.recipe.ingredient) {
            this.recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, Validators.required)
              }));
          }
        }
        this.myForm = new FormGroup({
          name: new FormControl(this.recipe.name, Validators.required),
          desc: new FormControl(this.recipe.desc, Validators.required),
          imagesrc: new FormControl(this.recipe.imagePath, Validators.required),
          ingredients: this.recipeIngredients
        });
      });
  }

  onDelete(id: number) {
    this.recipeIngredients.removeAt(id);
  }

  onAddIngredient() {
    this.recipeIngredients.push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required)
    }));
  }

  onSubmit() {
    const ingredient =new  Array<Ingredient>();
    for (let arrCtrl of this.recipeIngredients.controls) {
      ingredient.push(new Ingredient(arrCtrl.value.name, arrCtrl.value.amount));
    }
    this.recipe.ingredient = ingredient;
    this.recipeService.onEditRecipe(this.id, this.recipe);
    this.route.navigate(['../','recipe']);
  }

  onBack() {
    this.route.navigate(['../', 'recipe']);
  }
}
