import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/items/items.model';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.scss']
})
export class ProductitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
