import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from '../data-storage.service';
import {RecipeService} from '../recipes/recipe.service';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  token: string;

  constructor(private dataService: DataStorageService, private recipeService: RecipeService, private userService: UserService) {
  }

  ngOnInit() {
    this.token = this.userService.token;
  }

  sendval(val: string) {
  }

  onSave() {
    if (this.recipeService.getrecipe().length) {
      this.dataService.onSaveData().subscribe((response: Response) => {
        console.log(response)
      });
    }
  }

  onLoad() {
    this.dataService.onLoadData().subscribe((response: Response) => {
      this.recipeService.setrecipe(response.json());
    });
  }

}
