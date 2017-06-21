import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping-service.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }
  onAddItem()
  {
  	const nameEl = this.nameInputRef.nativeElement.value;
  	const amountEl = this.amountInputRef.nativeElement.value;
  	this.shoppingService.onAddIngredient(new Ingredient(nameEl,amountEl));
  }
  clearsub(){
  	this.shoppingService.onClearIngredient();
  }
}
