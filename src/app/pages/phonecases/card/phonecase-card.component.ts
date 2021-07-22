import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Case } from 'src/app/shared/models/case.model';

@Component({
  selector: 'app-phonecase-card',
  templateUrl: './phonecase-card.component.html',
  styleUrls: ['./phonecase-card.component.scss']
})
export class PhonecaseCardComponent implements OnInit {
  @Input() phonecase: Case = {} as any;
  @Input() hasAction = true;
  @Output() callFav = new EventEmitter<Case>();
  @Output() getPhonecase = new EventEmitter<Case>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleFavorite(event: any): void {
    event.stopPropagation();
    this.phonecase.fav = !this.phonecase.fav;
    this.callFav.emit(this.phonecase);
  }

}
