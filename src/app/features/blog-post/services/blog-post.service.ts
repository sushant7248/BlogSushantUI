import { Injectable, model } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient,HttpParams} from '@angular/common/http';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  
  constructor(private http: HttpClient) { }
 
  createBlogPost(model: AddBlogPost) : Observable<BlogPost> {
  // const blogpostdata={
  //   "title": "Sushant",
  //   "shortDescription": "AngularDotnetCore",
  //   "content": "string",
  //   "featuredImageUrl": "string",
  //   "urlHandle": "string",
  //   "publishedDate": "2024-04-08T11:02:14.607Z",
  //   "author": "string",
  //   "isVisible": true,
  //   "categories": [
  //     "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  //   ]
  // }
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'accept': '*/*'
    // });

    return this.http.post<BlogPost>(`https://localhost:7097/api/BlogPost`,model);

   
  }

  // getAllBlogPosts() : Observable<BlogPost[]> {
  //   return this.http.get<BlogPost[]>(`https://localhost:7097/api/BlogPost`);
  // }


  getAllBlogPosts(
    query?: string,
    sortBy?: string,
    sortDirection?: string,
    pageNumber?: number,
    pageSize?: number
  ): Observable<BlogPost[]> {
    let params = new HttpParams();

    if (query) {
      params = params.set('query', query);
    }

    if (sortBy) {
      params = params.set('sortBy', sortBy);
    }

    if (sortDirection) {
      params = params.set('sortDirection', sortDirection);
    }

    if (pageNumber) {
      params = params.set('pageNumber', pageNumber.toString());
    }

    if (pageSize) {
      params = params.set('pageSize', pageSize.toString());
    }

    return this.http.get<BlogPost[]>('https://localhost:7097/api/BlogPost', {
      params: params
    });
  }

  
  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://localhost:7097/api/BlogPost/${id}`);
  }

  getBlogPostByUrlHandle(urlHandle: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`https://localhost:7097/api/BlogPost/${urlHandle}`);
  }

  updateBlogPost(id: string, updatedBlogPost: UpdateBlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`https://localhost:7097/api/BlogPost/${id}`, updatedBlogPost);
  }

  deleteBlogPost(id: string): Observable<BlogPost> {
    return this.http.delete<BlogPost>(`https://localhost:7097/api/BlogPost/${id}`);
  }
}

