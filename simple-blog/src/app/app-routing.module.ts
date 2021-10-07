import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomePageComponent } from './blog-home-page/blog-home-page.component';
import { BlogProfilePageComponent } from './blog-profile-page/blog-profile-page.component';

const routes: Routes = [
  { path: '', component: BlogHomePageComponent },
  { path: 'profile', component: BlogProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
