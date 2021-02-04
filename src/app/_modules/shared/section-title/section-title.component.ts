import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})

export class SectionTitleComponent implements OnInit {

  @Input() details: Object;
  @Output() viewModeChange = new EventEmitter<string>();

  public viewMode: string = 'table';

  constructor() { }

  ngOnInit(): void { }

  // Throw view mode value
  setView(mode) {
    this.viewMode = mode;
    this.viewModeChange.emit(mode);
  }

}
