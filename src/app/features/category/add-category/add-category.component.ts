import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})

export class AddCategoryComponent {
  model: { name: string, urlHandle: string };

  constructor(private categoryServices:CategoryService) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit() {
  
   this.categoryServices.addCategory(this.model)
   .subscribe({
    next:(response) =>{


    }

   })
  }


}







