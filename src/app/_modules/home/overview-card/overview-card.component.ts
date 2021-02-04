import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview-card',
  templateUrl: './overview-card.component.html',
  styleUrls: ['./overview-card.component.scss']
})
export class OverviewCardComponent implements OnInit {

  @Input() overview;

  constructor() { }

  ngOnInit(): void {
  }

}
