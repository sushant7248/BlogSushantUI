



import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
   standalone: true, 
})
export class CategoryListComponent {
  constructor(private router: Router) {}
  navigateToCategory(): void {
    this.router.navigate(['admin/categories/add']);
  }
}



