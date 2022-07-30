import { Component, OnInit } from '@angular/core';
import {Recette} from "../../shared/interface/recette.model";
import {RecetteService} from "../../service/recette.service";

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.component.html',
  styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit {

  recette$ = this.recetteService.recette$;
  recettes$ = this.recetteService.recettes$;

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
  }

}
