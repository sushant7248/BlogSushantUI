

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogpost-list',
   standalone: true,
   imports: [],
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent {
  
  constructor(private router: Router) {}

  navigateToAddBlogPost(): void {
    this.router.navigate(['admin/blogposts/add']);
  }
}

