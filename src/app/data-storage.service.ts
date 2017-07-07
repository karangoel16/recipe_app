import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {RecipeService} from './recipes/recipe.service';
import {UserService} from './user/user.service';
@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private userService: UserService) {
  }

  onSaveData() {
    const token = this.userService.getToken();
    return this.http.put('https://shopping-app-2b2cc.firebaseio.com/recipe.json?auth='+token, this.recipeService.getrecipe());
  }

  onLoadData() {
    const token = this.userService.getToken();
    console.log(token);
    return this.http.get('https://shopping-app-2b2cc.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getrecipe());
  }
}
