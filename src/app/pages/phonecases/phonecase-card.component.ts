import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/items/items.model';

@Component({
  selector: 'app-phonecase-card',
  templateUrl: './phonecase-card.component.html',
  styleUrls: ['./phonecase-card.component.scss']
})
export class PhonecaseCardComponent implements OnInit {
  @Input() item?: Item;
  @Input() randitem?: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
