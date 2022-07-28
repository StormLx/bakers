import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/interface/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    {
      name: 'Tomato',
      quantity: 1,
      price: 0.75
    },
    {
      name: 'Mozzarella di buffala',
      quantity: 1,
      price: 1.99
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
