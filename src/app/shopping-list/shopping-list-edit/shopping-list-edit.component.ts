import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clearsub(){
  	console.log("hello");//this is my way of testing
  }
}
