import { Component, Input, OnInit } from '@angular/core';
import { Powerbank } from 'src/app/shared/models/powerbank.models';

@Component({
  selector: 'app-powerbank-card',
  templateUrl: './powerbank-card.component.html',
  styleUrls: ['./powerbank-card.component.scss']
})
export class PowerbankCardComponent implements OnInit {
  @Input() powerbank?: Powerbank;
  constructor() { }

  ngOnInit(): void {
  }

}
