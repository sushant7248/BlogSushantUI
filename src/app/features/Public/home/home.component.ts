import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BlogPostService } from '../../blog-post/services/blog-post.service';
import { BlogPost } from '../../blog-post/models/blog-post.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  blogs$: Observable<BlogPost[]> | undefined;
  pageNumber = 1;
  pageSize = 10;
  query = '';
  sortBy = '';
  sortDirection = '';
  totalItemCount = 100;


  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.blogs$ = this.blogPostService.getAllBlogPosts(
      this.query,
      this.sortBy,
      this.sortDirection,
      this.pageNumber,
      this.pageSize
    );
  }
  onSearch(title: string): void {
    const query = title ? `title:${title}` : '';
    console.log(query);
    this.blogPostService.getAllBlogPosts(query)
      
  }


  sort(sortBy: string, sortDirection: string): void {
    // Implement sorting functionality
    this.sortBy = sortBy;
    this.sortDirection = sortDirection;
    this.loadBlogs();
  }

  onPageChange(pageNumber: number): void {
    // Implement pagination functionality
    this.pageNumber = pageNumber;
    this.loadBlogs();
  }
  getPageArray(): number[] {
    // Method to generate an array of page numbers for pagination
    // You can customize this method based on your pagination logic
    // Here, we generate an array of pages from 1 to the total number of pages
    const totalPages = Math.ceil(this.pageCount() / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  pageCount(): number {
    // Method to calculate the total number of pages based on the total count of blog posts
    // You should get the total count of blog posts from your service
    // For simplicity, let's assume you have a totalItemCount property
    // Replace it with the actual count logic from your service
    const totalItemCount = 100; // Replace with the actual count logic
    return Math.ceil(totalItemCount / this.pageSize);

  }

  isLastPage(): boolean {
    // Method to check if the current page is the last page
    const totalPages = Math.ceil(this.totalItemCount / this.pageSize);
    return this.pageNumber === totalPages;
  }
}
// export class HomeComponent implements OnInit {

//   blogs$?: Observable<BlogPost[]>;
 


//   constructor(private blogPostService: BlogPostService) {

//   }
  
//   ngOnInit(): void {
//     this.blogs$ = this.blogPostService.getAllBlogPosts();
//   }
 
// }

