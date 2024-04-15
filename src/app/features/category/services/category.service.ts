
import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../models/category.model';

import { UpdateCategoryRequest } from '../models/update-category-request.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})


export class CategoryService {


    constructor(private http: HttpClient,private cookieService: CookieService) { }

    getAllCategories(
      query?: string, sortBy?: string, sortDirection?: string,
      pageNumber?: number, pageSize?: number): Observable<Category[]> {
      let params = new HttpParams();
  
      if (query) {
        params = params.set('query', query)
      }
  
      if (sortBy) {
        params = params.set('sortBy', sortBy)
      }
  
      if (sortDirection) {
        params = params.set('sortDirection', sortDirection)
      }
  
      if (pageNumber) {
        params = params.set('pageNumber', pageNumber)
      }
  
      if (pageSize) {
        params = params.set('pageSize', pageSize)
      }
  
      return this.http.get<Category[]>(`https://localhost:7097/api/categories`, {
        params: params
      });
    }
  
    getCategoryById(id: string): Observable<Category> {
      return this.http.get<Category>(`https://localhost:7097/api/categories/${id}`);
    }
  
    getCategoryCount(): Observable<number> {
      return this.http.get<number>(`https://localhost:7097/api/categories/count`);
    }
  
    addCategory(model: AddCategoryRequest): Observable<void> {
      return this.http.post<void>(`https://localhost:7097/api/categories`, model);
    }
  
    updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest): Observable<Category> {
      return this.http.put<Category>(`https://localhost:7097/api/categories/${id}`, updateCategoryRequest);
    }
    //${environment.apiBaseUrl} https://localhost:7097
  
    deleteCategory(id: string): Observable<Category> {
      return this.http.delete<Category>(`https://localhost:7097/api/categories/${id}`)
    }
}
 


