import {CartItem} from "./cart-item.model";

export interface Recette {
  id: number;
  titre: string;
  shortDescription: string;
  description: string;
  imageURL: string;
  ingredients: CartItem[];
}
