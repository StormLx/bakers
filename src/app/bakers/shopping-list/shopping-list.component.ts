import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../shared/interface/ingredient.model";
import {ShoppingListService} from "../../service/shopping-list.service";
import {CartItem} from "../../shared/interface/cart-item.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  cartItems$ = this.shoppingListService.cartItems$;
  cartItems: CartItem[] = [];


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.cartItems$.subscribe(items => {
      this.cartItems = [...items];
      console.log(this.cartItems)
    });
  }

}
