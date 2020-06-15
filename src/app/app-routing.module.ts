import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostComponent } from './list-post/list-post.component';

const routes: Routes = [
  { path: 'create', component: CreatePostComponent },
  { path: 'list', component: ListPostComponent },
  {
    path: '',
    redirectTo: '/create',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
