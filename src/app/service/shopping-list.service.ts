import {Injectable} from "@angular/core";
import {BehaviorSubject, ReplaySubject, scan, Subject, tap} from "rxjs";
import {CartItem} from "../shared/interface/cart-item.model";
import {Action} from "../shared/interface/action.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private itemSubject = new ReplaySubject<Action<CartItem>>();
  itemAction$ = this.itemSubject.asObservable();

  cartItems$ = this.itemAction$.pipe(
    scan((items, itemActions) =>
    this.modifyCart(items, itemActions), [] as CartItem[])
  ) as BehaviorSubject<any>;

  constructor() {
  }

  addToCart(item: CartItem): void {
    const i = Object.assign({}, item);
    this.itemSubject.next({
      item: i,
      action: 'add'
    })
  }

  updateCartItem(item: CartItem): void {
    const i = Object.assign({}, item);
    this.itemSubject.next({
      item: i,
      action: 'update'
    })
  }

  deleteCartItem(item: CartItem): void {
    const i = Object.assign({}, item);
    this.itemSubject.next({
      item: i,
      action: 'delete'
    })
  }

  private modifyCart(items: CartItem[], op: Action<CartItem>): CartItem[] {
    if(op.action === 'add') {
        const cartItem = items.find(i => i.ingredient.id === op.item.ingredient.id);
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
