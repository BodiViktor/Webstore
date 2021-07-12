import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORIES } from 'src/app/shared/database/category.database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  categories = CATEGORIES;

  constructor(private router: Router) { }

  logout() {
    this.router.navigateByUrl('login')
  }

}
