import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping-service.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  myForm: FormGroup;
  ingredient: Ingredient;

  constructor(private shoppingService: ShoppingService, private router: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required)
    });
    this.router.params
      .subscribe((param: Params) => {
        this.id = param.id;
        if (this.id != null) {
          this.editMode = true;
          this.ingredient = this.shoppingService.onGetIngredientById(this.id);
          this.myForm.setValue({
            name: this.ingredient.name,
            amount: this.ingredient.amount
          });
        } else {
          this.editMode = false;
        }

      });
  }

  onSubmit() {
    if (!this.editMode) {
      this.shoppingService.onAddIngredient(new Ingredient(this.myForm.value.name, this.myForm.value.amount));
    } else {
      this.ingredient.name = this.myForm.value.name;
      this.ingredient.amount = this.myForm.value.amount;
      this.shoppingService.onEditIngredient(this.id, this.ingredient);
      this.route.navigate(['../', 'shopping']);
    }
  }


  clearsub() {
    this.myForm.reset();
    this.route.navigate(['../', 'shopping']);
  }

  onDeleteItem() {
    this.shoppingService.onDeleteIngredient(this.id);
    this.route.navigate(['../', 'shopping']);
  }
}
