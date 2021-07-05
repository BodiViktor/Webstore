import { Component, Input, OnInit } from '@angular/core';
import { Case } from 'src/app/shared/models/case.model';

@Component({
  selector: 'app-phonecase-card',
  templateUrl: './phonecase-card.component.html',
  styleUrls: ['./phonecase-card.component.scss']
})
export class PhonecaseCardComponent implements OnInit {
  @Input() case?: Case;
  @Input() randcase?: Case;

  constructor() { }

  ngOnInit(): void {
  }

}
