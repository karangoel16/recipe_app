import { Component, OnInit ,ElementRef,ViewChild,EventEmitter,Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem()
  {
  	const nameEl = this.nameInputRef.nativeElement.value;
  	const amountEl = this.amountInputRef.nativeElement.value;
  	this.ingredientAdded.emit(new Ingredient(nameEl,amountEl));
  }
  clearsub(){
  	console.log("hello");//this is my way of testing
  }
}
