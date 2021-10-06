import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogProfilePageComponent } from './blog-profile-page/blog-profile-page.component';

const routes: Routes = [
  { path: 'profile', component: BlogProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
