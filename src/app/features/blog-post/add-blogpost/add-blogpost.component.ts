import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { FormsModule } from '@angular/forms';

import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';


@Component({
  selector: 'app-add-blogpost',
 standalone: true,
 imports: [FormsModule],
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css'],
  providers: []
})
export class AddBlogpostComponent {

  model:AddBlogPost;
  

  constructor(private blogpostService:BlogPostService,private  router:Router,private categoryService: CategoryService){
  this.model= {

    

    title: '',
    shortDescription: '',
    urlHandle: '',
    content: '',
    featuredImageUrl: '',
    author: '',
    isVisible: true,
    publishedDate: new Date(),
    categories: []


    
  }

  }

  onFormSubmit():void {
    console.log(this.model);
    this.blogpostService.createBlogPost(this.model)
    .subscribe({

      next:(response)=> {

         this.router.navigateByUrl('/admin/blogposts');
      }
    });
  }

}



