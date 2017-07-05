import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  myForm: FormGroup;
  imagepath: string;

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((params: Params) => {
        this.id = params.id;
        this.recipe = this.recipeService.getrecipeById(this.id);
        this.imagepath = this.recipe.imagePath;
        this.myForm = new FormGroup({
          name: new FormControl(this.recipe.name, Validators.required),
          desc: new FormControl(this.recipe.desc, Validators.required),
          imagesrc: new FormControl(this.recipe.imagePath, Validators.required)
        });
      });
  }

  onSubmit() {
    console.log('we are here');
  }
}
