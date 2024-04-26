import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogpost-list',
   standalone: true,
   imports: [CommonModule,RouterLink],
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
 export class BlogpostListComponent implements OnInit {

  blogPosts$?: Observable<BlogPost[]>;

  constructor(private blogPostService: BlogPostService) {

  }

  ngOnInit(): void {
    // get all blog posts from API
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();
  }

}
