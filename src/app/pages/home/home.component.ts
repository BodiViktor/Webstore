import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CASES } from 'src/app/shared/database/case.database';
import { Case } from 'src/app/shared/models/case.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  category?= '';
  //randitems = ITEMS[Math.floor(Math.random() * ITEMS.length)];

  constructor() {
    // console.log(this.randitems);
  }

  ngOnInit(): void {
    this.category = 'randcase'
  }
  ngOnDestroy(): void {
    delete this.category;
  }

}
