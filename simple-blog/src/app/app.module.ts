import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';
import { BlogHomePageComponent } from './blog-home-page/blog-home-page.component';
import { FormsModule } from '@angular/forms';
import { LoginDialogComponent } from './blog-dialogs/login-dialog/login-dialog.component';
import { BlogProfilePageComponent } from './blog-profile-page/blog-profile-page.component';
import { SignupDialogComponent } from './blog-dialogs/signup-dialog/signup-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogNavbarComponent,
    BlogHomePageComponent,
    LoginDialogComponent,
    BlogProfilePageComponent,
    SignupDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
