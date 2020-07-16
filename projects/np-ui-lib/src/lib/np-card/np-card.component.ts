import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'np-card',
  templateUrl: './np-card.component.html',
  styleUrls: ['./np-card.component.css']
})
export class NpCardComponent implements OnInit {
  static controlCount = 1;

  @Input() styleClass: string;
  @Input() width: number;
  @Input() inputId = `np-card_${NpCardComponent.controlCount++}`;

  constructor() { }

  ngOnInit(): void {
  }

}
