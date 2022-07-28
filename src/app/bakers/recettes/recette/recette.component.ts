import {Component, Input, OnInit} from '@angular/core';
import {Recette} from "../../../shared/interface/recette.model";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  @Input() recette!: Recette;

  constructor() { }

  ngOnInit(): void {
  }

}
