import {Component, Input, OnInit} from '@angular/core';
import {Recette} from "../../../shared/interface/recette.model";
import {ShoppingListService} from "../../../service/shopping-list.service";

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.scss']
})
export class RecetteDetailComponent implements OnInit {

  @Input() recette!: Recette;

  constructor(private shoppingCart: ShoppingListService) { }

  ngOnInit(): void {
  }

  addItemsToCart() {
    this.recette.ingredients.forEach(recette => {
    this.shoppingCart.addToCart(recette);
    });
  }
}
