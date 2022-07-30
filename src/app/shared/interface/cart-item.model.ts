import {Ingredient} from "./ingredient.model";

export interface CartItem {
  ingredient: Ingredient;
  quantity: number;
}
