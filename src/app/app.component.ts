import { Component } from '@angular/core';
import {ShoppingService} from './shopping-list/shopping-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ShoppingService]
})
export class AppComponent {
  title = 'app';
  val="recipe";
  check(serverData:{type:string}){
  	this.val=serverData.type;
  }
}
