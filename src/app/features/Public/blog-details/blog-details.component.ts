import { Component,OnInit } from '@angular/core';
import { BlogPostService } from '../../blog-post/services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-post/models/blog-post.model';
import { CommonModule } from '@angular/common';
import { provideMarkdown } from 'ngx-markdown';
import { MarkdownModule } from 'ngx-markdown';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule,MarkdownModule],
  providers:[provideMarkdown()],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})

export class BlogDetailsComponent implements OnInit {
  url: string | null = null;
  blogPost$?: Observable<BlogPost>;

  constructor(private route: ActivatedRoute, private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.url = params.get('url');
        if (this.url) {
          this.blogPost$ = this.blogPostService.getBlogPostByUrlHandle(this.url);
          this.blogPost$?.subscribe((data: BlogPost) => {
            console.log(data);
          });
        }
      }
    });
  }
}

// export class BlogDetailsComponent implements OnInit {
//   url: string | null = null;
//   blogPost$? : Observable<BlogPost>;


//   constructor(private route: ActivatedRoute,
//     private blogPostService: BlogPostService) {

//     }

//     ngOnInit(): void {
//       this.route.paramMap
//       .subscribe({
//         next: (params) => {
//           this.url = params.get('url');
//         }
//       });
  
   
//       if (this.url) {
//         this.blogPost$ = this.blogPostService.getBlogPostByUrlHandle(this.url);
//       }
//     }
      
// }


// import { Component, OnInit } from '@angular/core';
// import { BlogPostService } from '../../blog-post/services/blog-post.service';
// import { Observable } from 'rxjs';
// import { BlogPost } from '../../blog-post/models/blog-post.model';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })