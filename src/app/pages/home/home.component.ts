import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ITEMS } from 'src/app/shared/database/item.database';
import { Item } from 'src/app/shared/models/items/items.model';

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
    this.category = 'randitem'
  }
  ngOnDestroy(): void {
    delete this.category;
  }

}
