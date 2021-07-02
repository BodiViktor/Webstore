import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITEMS } from 'src/app/shared/database/item.database';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {
  items = ITEMS;
  category?= '';
  constructor() {
  }

  ngOnInit(): void {
    this.category = 'item'
  }
  ngOnDestroy(): void {
    delete this.category;
  }

}
