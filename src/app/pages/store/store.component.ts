import { Component, OnDestroy, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';
import { CASES } from 'src/app/shared/database/case.database';
import { POWERBANKS } from 'src/app/shared/database/powerbank.database';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, OnDestroy {
  categories = CATEGORIES;
  cases = CASES;
  powerbanks = POWERBANKS;
  category?= '';
  page = 'store';
  constructor() { }

  ngOnInit(): void {
    this.category = 'case'
  }
  ngOnDestroy(): void {
    delete this.category;
  }

}
