import { Component, Input, OnInit } from '@angular/core';
import { Case } from 'src/app/shared/models/case.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() favorite: Case = {} as any;
  constructor() { }

  ngOnInit(): void {
  }

}
