import { Component } from '@angular/core';
import {ShoppingListService} from "../../../service/shopping-list.service";

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html'
})
export class CartTotalComponent {

  cartItems$ = this.cartService.cartItems$;

  subTotal$ = this.cartService.subTotal$;

  deliveryFee$ = this.cartService.deliveryFee$;

  tax$ = this.cartService.tax$;

  totalPrice$ = this.cartService.totalPrice$;

  constructor(private cartService: ShoppingListService) { }

}
