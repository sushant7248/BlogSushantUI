import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Core/components/navbar/navbar.component";
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './features/category/services/category.service';
import { AddBlogpostComponent } from './features/blog-post/add-blogpost/add-blogpost.component';
import { BlogPostService } from './features/blog-post/services/blog-post.service';
import { FormsModule } from '@angular/forms';
import { BlogpostListComponent } from './features/blog-post/blogpost-list/blogpost-list.component';
import { LoginComponent } from './features/auth/login/login.component';
import { CommonModule } from '@angular/common';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent,AddCategoryComponent,HttpClientModule,AddBlogpostComponent,FormsModule,BlogpostListComponent,LoginComponent,CommonModule],
   providers:[CategoryService,BlogPostService]

})
export class AppComponent {
  title = 'BlogSushantUI';
}
