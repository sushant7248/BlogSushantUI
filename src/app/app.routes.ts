import { Routes} from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { BlogpostListComponent } from './features/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/blog-post/add-blogpost/add-blogpost.component';
import { LoginComponent } from './features/auth/login/login.component';
// import { HomeComponent } from './features/Public/home/home.component';

export const routes: Routes = [

    {

        path:'admin/categories',
        component:CategoryListComponent
    },
    {
        path:'admin/categories/add',
        component:AddCategoryComponent
    },
    {

        path:'admin/blogposts',
        component:BlogpostListComponent
    },{

        path:'admin/blogposts/add',
        component:AddBlogpostComponent
    },{

        path:'admin/features/login',
        component:LoginComponent
    }
   
    
];
