import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Recette} from "../shared/interface/recette.model";

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  recettes: Recette[] = [
    {
      id: 1,
      titre: 'Pizza montagnarde',
      shortDescription: 'C\'est méga bon!',
      description: 'Sed porttitor, turpis nec tincidunt elementum, lacus nisi commodo nisi, quis condimentum dolor justo sed elit. Nam dictum tortor orci, malesuada porttitor mauris tristique eget. Fusce rutrum congue dui, vel iaculis eros pulvinar sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras molestie nisl at neque ullamcorper, vel dignissim ex luctus. Vivamus mattis diam nec nisl feugiat, id viverra augue ornare. Aenean venenatis erat urna, sit amet vehicula sapien mattis eget. Vestibulum eget pretium velit. Sed et justo egestas, rutrum diam sit amet, scelerisque dolor. Vivamus ac sem sit amet tellus pharetra imperdiet a id felis. Vivamus in dignissim massa. Quisque tellus neque, luctus non tincidunt nec, consequat quis risus. Etiam laoreet nunc eget erat facilisis porta. Sed posuere euismod lorem sed ornare. Nam feugiat ullamcorper purus, et consequat metus. Sed imperdiet venenatis nibh.',
      imageURL: 'https://source.unsplash.com/random/200x100/?pizza',
      ingredients: [
        {
          ingredient: {id: 1, name: 'Tomato', price: 0.75, mesure: 'p'},
          quantity: 3,
        },
        {
          ingredient: {id: 2, name: 'Mozzarella di buffala', price: 1.99, mesure: 'p'},
          quantity: 2,
        }
      ],
    },
    {
      id: 2,
      titre: 'Penne alla putanesca',
      shortDescription: 'C\'est méga bon!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, arcu ut bibendum laoreet, tellus urna porta mi, sit amet commodo neque magna a arcu. Suspendisse laoreet fringilla semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras non nisi sagittis, dictum ex at, porttitor lectus. Aliquam ac risus risus. Etiam a semper nisl. Nulla placerat sapien in ligula vulputate maximus. Fusce a rutrum nibh. Nulla non leo scelerisque, commodo risus in, tempus magna. Aenean blandit purus nunc, eu lacinia velit pulvinar vel. Sed sed pretium ipsum, vitae luctus ipsum. Mauris commodo velit elit, a eleifend enim volutpat et. Nulla aliquet ornare placerat. Ut a neque et ligula malesuada rutrum. Vestibulum id aliquet ante.',
      imageURL: 'https://source.unsplash.com/random/201x100/?pasta',
      ingredients: [
        {
          ingredient: {
            id: 1,
            name: 'Tomato',
            price: 0.75,
            mesure: 'p'
          },
          quantity: 2
        },
        {
          ingredient: {
            id: 3,
            name: 'Pepper',
            price: 1.99,
            mesure: 'pinch'
          },
          quantity: 1
        }
      ],
    },
  ];

  private recetteSubject = new BehaviorSubject<Recette>(this.recettes[0]);
  recette$ = this.recetteSubject.asObservable();

  private recettesSubject = new BehaviorSubject<Recette[]>(this.recettes);
  recettes$ = this.recettesSubject.asObservable();

  constructor() {
  }

  displayRecetteDetail(recette: Recette): void {
    this.recetteSubject.next(recette);
  }
}
