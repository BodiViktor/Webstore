import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/items/items.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  @Input() item?: Item;
  @Input() randitem?: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
