import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingListService} from "../../service/shopping-list.service";
import {map, reduce} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onNavigateEvent = new EventEmitter<string>();
  activeNav = 'recettes';
  nItems$ = this.shoppingList.cartItems$.pipe(map(items => items.length));

  constructor(private shoppingList: ShoppingListService) {
  }


  ngOnInit(): void {
  }

  onClick(url: string): void {
    this.onNavigateEvent.emit(url);
    this.activeNav = url;
  }
}
