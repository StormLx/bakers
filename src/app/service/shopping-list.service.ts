import {Injectable} from "@angular/core";
import {combineLatest, map, scan, shareReplay, Subject} from "rxjs";
import {CartItem} from "../shared/interface/cart-item.model";
import {Action} from "../shared/interface/action.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // Add item action
  private itemSubject = new Subject<Action<CartItem>>();
  itemAction$ = this.itemSubject.asObservable();

  cartItems$ = this.itemAction$
    .pipe(
      scan((items, itemAction) => this.modifyCart(items, itemAction), [] as CartItem[]),
      shareReplay(1)
    );

  // Total up the extended price for each item
  subTotal$ = this.cartItems$.pipe(
    map(items => items.reduce((a, b) => a + (b.quantity * Number(b.ingredient.price)), 0)),
  );

  // Delivery is free if spending more than 200,000 credits
  deliveryFee$ = this.subTotal$.pipe(
    map((t) => (t < 50 ? 9.99 : 0))
  );

  // Tax could be based on shipping address zip code
  tax$ = this.subTotal$.pipe(
    map((t) => Math.round(t * 10.75) / 100)
  );

  // Total price
  totalPrice$ = combineLatest([
    this.subTotal$,
    this.deliveryFee$,
    this.tax$,
  ]).pipe(map(([st, d, t]) => st + d + t));

  constructor() {
  }

  addToCart(item: CartItem): void {
    const copy = Object.assign({}, item)
    this.itemSubject.next({
      item: copy,
      action: 'add'
    })
  }



  // Remove the item from the cart
  removeFromCart(cartItem: CartItem): void {
    const copy = Object.assign({}, cartItem)
    this.itemSubject.next({
      item: copy,
      action: 'delete'
    });
  }

  updateInCart(cartItem: CartItem): void {
      const copy = Object.assign({}, cartItem)
      this.itemSubject.next({
        item: copy,
        action: 'update'
      });
    }

  private modifyCart(items: CartItem[], op: Action<CartItem>): CartItem[] {
    if(op.action === 'add') {
        const cartItem =  items.find(i => i.ingredient.id === op.item.ingredient.id);
      if(cartItem) {
        cartItem.quantity += op.item.quantity;
        return [...items];
      }
      return [...items, op.item];
    } else if (op.action === 'update') {
      return items.map(item =>
      item.ingredient.id === op.item.ingredient.id ? op.item : item);
    } else if (op.action === 'delete') {
      return items.filter(item => item.ingredient.id !== op.item.ingredient.id);
    }
    return [...items];
  }


}
