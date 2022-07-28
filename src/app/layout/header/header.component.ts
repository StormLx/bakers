import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onNavigateEvent = new EventEmitter<string>();
  activeNav = 'recettes';

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(url: string): void {
    this.onNavigateEvent.emit(url);
    this.activeNav = url;
  }
}
