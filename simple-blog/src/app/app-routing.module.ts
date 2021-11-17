import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAdminPageComponent } from './blog-admin-page/blog-admin-page.component';
import { BlogHomePageComponent } from './blog-home-page/blog-home-page.component';
import { BlogProfilePageComponent } from './blog-profile-page/blog-profile-page.component';

const routes: Routes = [
  { path: '', component: BlogHomePageComponent },
  { path: 'admin', component: BlogAdminPageComponent},
  { path: 'profile', component: BlogProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
