import {Component} from '@angular/core';
import {ShoppingService} from './shopping-list/shopping-service.service';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './data-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingService, RecipeService,DataStorageService]
})
export class AppComponent {
  title = 'app';
}
