import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {RecipeService} from './recipes/recipe.service';
@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {
  }

  onSaveData() {
    return this.http.put('https://shopping-app-2b2cc.firebaseio.com/recipe.json', this.recipeService.getrecipe());
  }

  onLoadData(){
    return this.http.get('https://shopping-app-2b2cc.firebaseio.com/recipe.json', this.recipeService.getrecipe());
  }
}
