import { Component, Input, OnDestroy, OnInit } from '@angular/core';

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
