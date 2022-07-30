import {Component, Input, OnInit} from '@angular/core';
import {Recette} from "../../../shared/interface/recette.model";
import {RecetteService} from "../../../service/recette.service";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  @Input() recette!: Recette;
  recette$ = this.recetteService.recette$;

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
  }

  onDisplayDetails() {
    this.recetteService.displayRecetteDetail(this.recette);
  }
}
