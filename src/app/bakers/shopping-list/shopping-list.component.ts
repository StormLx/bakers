import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../service/shopping-list.service";
import {first} from "rxjs";
import {CartItem} from "../../shared/interface/cart-item.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  cartItems$ = this.shoppingListService.cartItems$;


  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  delete(item: CartItem): void {
    this.shoppingListService.removeFromCart(item);
  }

  addOne(item: CartItem): void {
    item.quantity++;
    this.shoppingListService.updateInCart(item);
  }

  removeOne(item: CartItem): void {
    item.quantity--;
    this.shoppingListService.updateInCart(item);
  }
}
