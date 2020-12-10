import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckinComponent} from './checkin/checkin.component'
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component:CheckinComponent,
    // pathMatch:'full'
  },
  {
    path: 'list',
    component:BlogListComponent,
    // pathMatch:'full'
  },
  {
    path: 'blog/:blogid',
    component:BlogComponent,
    // pathMatch:'full'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
