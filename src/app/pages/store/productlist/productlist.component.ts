import { Component, Input, OnInit } from '@angular/core';
import { Case } from 'src/app/shared/models/case.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  @Input() case?: Case;
  @Input() randcase?: Case;

  constructor() { }

  ngOnInit(): void {
  }

}
