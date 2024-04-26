
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
;
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})

export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscribtion?: Subscription;

  constructor(private categoryService: CategoryService,
    private router: Router) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }


  onFormSubmit() {
    this.addCategorySubscribtion = this.categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/categories');
      }
    })
  }

  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }

}





