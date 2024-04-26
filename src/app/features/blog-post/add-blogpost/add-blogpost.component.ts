import { Component ,OnDestroy, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { FormsModule } from '@angular/forms';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../category/models/category.model';
import { ImageService } from '../../../shared/components/image-selector/image.service';
import { CommonModule } from '@angular/common';
import { provideMarkdown } from 'ngx-markdown';
import { MarkdownModule } from 'ngx-markdown';
import { ImageSelectorComponent } from '../../../shared/components/image-selector/image-selector.component';

@Component({
  selector: 'app-add-blogpost',
 standalone: true,
  imports: [FormsModule,CommonModule,MarkdownModule,ImageSelectorComponent],
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.css'],
  providers: [provideMarkdown()]
})
export class AddBlogpostComponent implements OnInit, OnDestroy {
  model: AddBlogPost;
  isImageSelectorVisible : boolean = false;
  categories$?: Observable<Category[]>;

  imageSelectorSubscription?: Subscription;

  constructor(private blogPostService: BlogPostService,
    private router: Router, private categoryService: CategoryService,private imageService: ImageService) {
    this.model = {
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


  ngOnInit(): void {
     this.categories$ = this.categoryService.getAllCategories();

     this.imageSelectorSubscription = this.imageService.onSelectImage()
     .subscribe({
      next: (selectedImage) => {
        this.model.featuredImageUrl = selectedImage.url;
        this.closeImageSelector();
      }
     })

  }

  onFormSubmit(): void {
    console.log(this.model);
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/blogposts');
      }
    });
  }

  openImageSelector(): void {
    this.isImageSelectorVisible = true;
    console.log('Image selector is now visible.');
   
  }

  closeImageSelector() : void {
    this.isImageSelectorVisible = false;
  }

  ngOnDestroy(): void {
    this.imageSelectorSubscription?.unsubscribe();
  }
}

