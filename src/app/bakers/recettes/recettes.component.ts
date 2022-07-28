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
    imageURL: 'https://picsum.photos/200/100'
  },
    {
      titre: 'Gaspacho',
      shortDescription: 'C\'est méga bon!',
      description: 'oijh fmzehf zemjhf zekjhf',
      imageURL: 'https://picsum.photos/200/100'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
