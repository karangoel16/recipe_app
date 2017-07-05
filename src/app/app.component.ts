import {Component} from '@angular/core';
import {ShoppingService} from './shopping-list/shopping-service.service';
import {RecipeService} from './recipes/recipe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingService, RecipeService]
})
export class AppComponent {
  title = 'app';
}
