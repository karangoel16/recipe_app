import {Component, OnInit} from '@angular/core';
import {ShoppingService} from './shopping-list/shopping-service.service';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './data-storage.service';
import {UserService} from './user/user.service';
import *  as firebase from 'firebase';
import {config} from './config.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingService, RecipeService, DataStorageService, UserService]
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp(config);
  }
}
