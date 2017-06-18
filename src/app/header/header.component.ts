import { Component, OnInit } from '@angular/core';
import {ShoppingComponent} from './shopping/shopping.component';
import { NgModule } from '@angular/core';
@NgModule({
	declarations:[ShoppingComponent],
		
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
