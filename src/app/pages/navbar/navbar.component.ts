import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sCategoryTitle?: string;
  @Input() selectedCategory?: string;
  @Input() categories: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  //value = '';
}
