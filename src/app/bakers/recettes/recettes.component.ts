import { Component, OnInit } from '@angular/core';
import {Recette} from "../../shared/interface/recette.model";

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit {

  recettes: Recette[] = [
    {
    titre: 'Pizza montagnarde',
    shortDescription: 'C\'est méga bon!',
    description: 'oijh fmzehf zemjhf zekjhf',
    imageURL: 'https://source.unsplash.com/random/200x50/?food'
  },
    {
      titre: 'Penne alla putanesca',
      shortDescription: 'C\'est méga bon!',
      description: 'oijh fmzehf zemjhf zekjhf',
      imageURL: 'https://source.unsplash.com/random/201x50/?food'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
